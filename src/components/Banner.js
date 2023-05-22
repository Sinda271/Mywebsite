import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lottie from 'lottie-react';
import assets from '../constants';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['a Unity Game Developer', 'an AI Developer', 'a Backend Developer'];
  const images = [assets.game, assets.chatbot, assets.dev];
  const [currentImage, setCurrentImage] = useState(null);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Sinda, `}{' '}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ [" a Unity Game Developer", " an AI Developer", "a Backend Developer"] ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    My fullname is Sinda Besrour. I'm 25 years old. I study Computer Science at the
                    University of Moncton, NB Canada. Before that, I worked as a Junior developer at
                    Talan Tunisia. I can make Desktop, mobile and web games with Unity, with a
                    multitude of features, namely, multiplyer, text/video/audio chat, character
                    customization, teleportation, etc. I can also exploit machine and deep learning
                    models for structured and unstructured data. Depending on the use case, I use
                    the appropriate pre-processing and feature extraction techniques. I also have
                    experience developing REST API based backends with NodeJS, Flask, or FastAPI.
                  </p>
                  <a
                    href={assets.resume}
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecorationLine: 'none' }}
                  >
                    <button onClick={() => console.log('connect')}>
                      Download my Resume <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <Lottie animationData={currentImage} loop={true} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
