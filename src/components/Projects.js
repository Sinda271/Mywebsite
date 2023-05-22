import assets from '../constants';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import React from 'react';
export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? 'animate__animated animate__zoomIn ' : 'projects-bx'}>
              <h2>PROJECTS</h2>
              <Grid container item style={{ marginTop: 50 }} xs={60} columnSpacing={20}>
                <Grid item xs={60} md={4}>
                  <img
                    style={{ width: 60, height: 60, marginBottom: 10 }}
                    src={assets.birdvox}
                    alt=""
                  />
                  <h3>BirdVox</h3>
                  <p>
                    Development of a binary classification model to detect the presence or absence
                    of a bird sound. The input data are audio files converted to Mel-frequency
                    spectrograms thanks to signal and image processing libraries such as Scipy and
                    Librosa. The classification model is a CNN network with carefully chosed
                    hyper-parameters.
                  </p>
                </Grid>

                <Grid item xs={60} md={4}>
                  <img
                    style={{ width: 60, height: 60, marginBottom: 10 }}
                    src={assets.smartparking}
                    alt=""
                  />
                  <h3>Smart Parking</h3>
                  <p>
                    This solution consists of the four main parts. A Mobile application that ensures
                    reservation and payment management. An AI model that insures licence plate
                    recognition at the entrance of the parking lot. An IoT network that ensures
                    communication between the hardware, cloud, and mobile application. A desktop
                    application for on-site payment.
                  </p>
                </Grid>

                <Grid item xs={60} md={4}>
                  <img
                    style={{ width: 60, height: 60, marginBottom: 10 }}
                    src={assets.keywordRec}
                    alt=""
                  />
                  <h3>Keyword Recognition</h3>
                  <p>
                    Development of a multi-class classification model to recognize simple keywords.
                    The input data are audio files from which we extracted MFCCs thanks to the
                    signal processing library Librosa. The classification model is a CNN network
                    hosted on an AWS EC2 instance using Flask, uWSGI, Nginx, Docker, Docker-Compose.
                  </p>
                </Grid>
              </Grid>
              <Grid container item style={{ marginTop: 50 }} xs={60} columnSpacing={20}>
                <Grid item xs={60} md={4}>
                  <img
                    style={{ width: 60, height: 60, marginBottom: 10 }}
                    src={assets.atco}
                    alt=""
                  />
                  <h3>ATC Simulator</h3>
                  <p>
                    Development of a air traffic control simulator for aviation schools. The
                    prototype is built with Unity and provides a multitude of feautres attributed
                    according to the role (student or instructor). The solution ensures multi-player
                    interaction between pilots, controllers and instructors as well as text and
                    audio chat thanks to Photon Pun, Chat and Voice.
                  </p>
                </Grid>

                <Grid item xs={60} md={4}>
                  <img
                    style={{ width: 60, height: 60, marginBottom: 10 }}
                    src={assets.review}
                    alt=""
                  />
                  <h3>Restaurant Reviews</h3>
                  <p>
                    Development of a simple model using Logistic Regression to classify restaurant
                    reviews into positive or negative. The model is adopted in a centralized
                    Federated Learing architecture based on the Flower framework where the central
                    node is a AWS EC2 virtual machine and the client nodes are restaurants.
                  </p>
                </Grid>

                <Grid item xs={60} md={4}>
                  <img
                    style={{ width: 60, height: 60, marginBottom: 10 }}
                    src={assets.fall}
                    alt=""
                  />
                  <h3>Fall Detection</h3>
                  <p>
                    Development of a realtime Fall detection solution based on accelerometer data
                    collect from a wearable sensor and centralized Federated Learning. The solution
                    follows a cloud-edge architecture where the central node (cloud layer) is An
                    allocated AWS CE2 instance and the client nodes (edge layer) are smartphones.
                  </p>
                </Grid>
              </Grid>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
