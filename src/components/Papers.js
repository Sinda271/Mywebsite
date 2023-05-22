import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle, ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lottie from 'lottie-react';
import assets from '../constants';

export const Papers = () => {
  const [hide, sethide] = useState(false);
  const [speed, setspeed] = useState(0);
  const [speedline, setspeedline] = useState(0);
  const dropDown = () => {
    sethide(!hide);
    setspeed(0.5);
    setspeedline(0.15);
  };
  return (
    <section className="papers" id="papers">
      <h2>PAPERS</h2>
      <Container>
        <Row>
          <Col>
            <div className="papers-bx">
              {hide ? (
                <div>
                  <button onClick={() => dropDown()} style={{ fontSize: 15, fontWeight: 400 }}>
                    <ChevronDown
                      size={15}
                      style={{ marginRight: 10, marginLeft: 10, animation: `chevup ${speed}s` }}
                    />
                    A Real-Time IoT System and ML algorithms: A Comparative Study
                  </button>
                  <hr className="papers-hl" style={{ animation: `lineup ${speedline}s` }} />
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => dropDown()}
                    style={{ color: '#b09cbe', fontSize: 15, fontWeight: 400 }}
                  >
                    <ChevronUp
                      size={15}
                      style={{
                        marginRight: 10,
                        marginLeft: 10,
                        color: '#b09cbe',
                        animation: `chevdown ${speed}s`
                      }}
                    />
                    A Real-Time IoT System and ML algorithms: A Comparative Study
                  </button>
                  <p>
                    Wearable sensors are frequently used for monitoring physical activities and
                    medical conditions. A variety of sensors are used, such as the accelerometer
                    (ACC), gyroscope (GYR), and magnetometer (MAG), which are often embedded in
                    Inertial Measurement Units (IMU). Data collected from these sensors can be used
                    to identify context or physical activities through context-aware learning
                    methods that apply a variety of learning algorithms.
                  </p>
                  <a
                    href="https://ieeexplore.ieee.org/abstract/document/9838761"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecorationLine: 'none' }}
                  >
                    <button onClick={() => console.log('Paper 1')}>
                      Learn More <ArrowRightCircle size={20} />
                    </button>
                  </a>
                  <hr className="papers-hl" style={{ animation: `linedown ${speedline}s` }} />
                </div>
              )}
            </div>
          </Col>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn papers-lottie' : ''}>
                  <Lottie
                    style={{ width: 600, height: 600 }}
                    animationData={assets.papers}
                    loop={true}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
