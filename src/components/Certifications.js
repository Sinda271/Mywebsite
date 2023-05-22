import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import assets from '../constants';

export const Certifications = () => {
  const [isFlipped, setisFlipped] = useState(false);
  const [isFlipped1, setisFlipped1] = useState(false);
  const [isFlipped2, setisFlipped2] = useState(false);
  const [isFlipped3, setisFlipped3] = useState(false);
  const [isFlipped4, setisFlipped4] = useState(false);
  const [speed, setspeed] = useState(0);

  const flip = (key) => {
    setspeed(0.5);
    switch (key) {
      case 'coursera-mlops':
        setisFlipped(true);
        break;
      case 'mitacs':
        setisFlipped1(true);
        break;
      case 'microsoft':
        setisFlipped2(true);
        break;
      case 'coursera-bi':
        setisFlipped3(true);
        break;
      case 'gomycode':
        setisFlipped4(true);
        break;
      default:
        break;
    }
  };
  const flipback = () => {
    setspeed(0.5);
    setisFlipped(false);
    setisFlipped1(false);
    setisFlipped2(false);
    setisFlipped3(false);
    setisFlipped4(false);
  };

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-bx">
        <h2>CERTIFICATES</h2>
        <Container>
          <Row>
            <div
              onMouseEnter={() => flip('coursera-mlops')}
              onMouseLeave={() => flipback()}
              style={{ width: 400, height: 400, margin: 'auto', marginBottom: 100 }}
            >
              {!isFlipped ? (
                <img
                  className="no-blur"
                  src={assets.coursera}
                  alt=""
                  style={{ animation: `front ${speed}s` }}
                />
              ) : (
                <div style={{ width: 400, height: 400, margin: 'auto' }}>
                  <img
                    className="blur"
                    src={assets.coursera}
                    alt=""
                    style={{ animation: `back ${speed}s` }}
                  />
                  <p style={{ animation: `back ${speed}s` }}>
                    Introduction to Machine Learning in Production
                    <br />
                    <br />
                    <br />
                    July 2022
                  </p>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => flip('mitacs')}
              onMouseLeave={() => flipback()}
              style={{ width: 400, height: 400, margin: 'auto', marginBottom: 100 }}
            >
              {!isFlipped1 ? (
                <img
                  className="no-blur"
                  src={assets.mitacs}
                  alt=""
                  style={{ animation: `front ${speed}s` }}
                />
              ) : (
                <div style={{ width: 400, height: 400, margin: 'auto' }}>
                  <img
                    className="blur"
                    src={assets.mitacs}
                    alt=""
                    style={{ animation: `back ${speed}s` }}
                  />
                  <p style={{ animation: `back ${speed}s` }}>
                    Certificate of Completion - Deep Learning for IoT
                    <br />
                    <br />
                    <br />
                    October 2021
                  </p>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => flip('microsoft')}
              onMouseLeave={() => flipback()}
              style={{ width: 400, height: 400, margin: 'auto', marginBottom: 100 }}
            >
              {!isFlipped2 ? (
                <img
                  className="no-blur"
                  src={assets.microsoft}
                  alt=""
                  style={{ animation: `front ${speed}s` }}
                />
              ) : (
                <div style={{ width: 400, height: 400, margin: 'auto' }}>
                  <img
                    className="blur"
                    src={assets.microsoft}
                    alt=""
                    style={{ animation: `back ${speed}s` }}
                  />
                  <p style={{ animation: `back ${speed}s` }}>
                    Microsoft Certified Azure AI Fundamentals
                    <br />
                    <br />
                    <br />
                    October 2021
                  </p>
                </div>
              )}
            </div>
          </Row>
          <Row>
            <div
              onMouseEnter={() => flip('coursera-bi')}
              onMouseLeave={() => flipback()}
              style={{ width: 400, height: 400, margin: 'auto', marginBottom: 100 }}
            >
              {!isFlipped3 ? (
                <img
                  className="no-blur"
                  src={assets.coursera}
                  alt=""
                  style={{ animation: `front ${speed}s` }}
                />
              ) : (
                <div style={{ width: 400, height: 400, margin: 'auto' }}>
                  <img
                    className="blur"
                    src={assets.coursera}
                    alt=""
                    style={{ animation: `back ${speed}s` }}
                  />
                  <p style={{ animation: `back ${speed}s` }}>
                    Getting Started with Power BI Desktop
                    <br />
                    <br />
                    <br />
                    June 2020
                  </p>
                </div>
              )}
            </div>
            <div style={{ width: 5, height: 5, marginLeft: -225, marginRight: -225 }}></div>
            <div
              onMouseEnter={() => flip('gomycode')}
              onMouseLeave={() => flipback()}
              style={{ width: 400, height: 400, margin: 'auto', marginBottom: 100 }}
            >
              {!isFlipped4 ? (
                <img
                  className="no-blur"
                  src={assets.gomycode}
                  alt=""
                  style={{ animation: `front ${speed}s` }}
                />
              ) : (
                <div style={{ width: 400, height: 400, margin: 'auto' }}>
                  <img
                    className="blur"
                    src={assets.gomycode}
                    alt=""
                    style={{ animation: `back ${speed}s` }}
                  />
                  <p style={{ animation: `back ${speed}s` }}>
                    Artificial Intelligence Development
                    <br />
                    <br />
                    <br />
                    August 2019
                  </p>
                </div>
              )}
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};
