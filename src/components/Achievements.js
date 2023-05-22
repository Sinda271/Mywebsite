import 'react-multi-carousel/lib/styles.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <Container>
        <div className="achievements-title" style={{ marginBottom: 50 }}>
          <h2>CAREER</h2>
        </div>
        <Grid container>
          <Grid item sm={6} className="vl">
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
              <h3 style={{ marginBottom: 30 }}>EDUCATION</h3>
              <h4 style={{ marginLeft: 30 }}>Master's Degree in Computer Science</h4>
              <h5 style={{ marginLeft: 30, marginBottom: 15 }}>
                University of Moncton | 2023 - 2024
              </h5>
              <p style={{ marginLeft: 30 }}>
                Working on a thesis entitled Deep Learning for IoT. Exploiting IoT, AI, Cloud
                Computing, and Federated Learning to conduct research studies based on wearable
                sensors in the medical sector.
              </p>
              <hr className="hl" />
            </div>
          </Grid>

          <Grid item sm={6} className="vl">
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
              <h3 style={{ marginBottom: 30 }}>EXPERIENCE</h3>
              <h4 style={{ marginLeft: 30 }}>Junior Developer</h4>
              <h5 style={{ marginLeft: 30, marginBottom: 15 }}>
                Talan Tunisie · Full-time | Oct 2021 - Dec 2022
              </h5>
              <p style={{ marginLeft: 30 }}>
                Contribution to the design and implementation of several projects in the domains of
                AI and the Metaverse, namely, Federated Learning for Hotel reservation management
                and the creation of MetaTalan.
              </p>
              <hr className="hl" />
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={6} className="vl">
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
              <h4 style={{ marginLeft: 30 }}>Engineer's Degree in Telecommunications</h4>
              <h5 style={{ marginLeft: 30, marginBottom: 15 }}>
                National Engineering School of Tunis | 2018 - 2021
              </h5>
              <p style={{ marginLeft: 30 }}>
                Equipped with an Engineer's degree in telecommunications from the National
                Engineering School of Tunis. Specializing in Data Science for Embedded
                Communications (DASEC).
              </p>
              <hr className="hl" />
            </div>
          </Grid>

          <Grid item sm={6} className="vl">
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
              <h4 style={{ marginLeft: 30 }}>Research Intern</h4>
              <h5 style={{ marginLeft: 30, marginBottom: 15 }}>
                University of Moncton · Internship | Jul 2021 - Sep 2021
              </h5>
              <p style={{ marginLeft: 30 }}>
                Development of a real-time physical activity prediction system that includes data
                collection from several subjects using a motion sensor, realtime prediction, and the
                development of a mobile application.
              </p>
              <hr className="hl" />
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item sm={6} className="vl">
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
              <h4 style={{ marginLeft: 30 }}>Preparatory Cycle in Mathematics and Physics</h4>
              <h5 style={{ marginLeft: 30, marginBottom: 15 }}>
                Preparatory Institute for Engineering Studies EL MANAR | 2016 - 2018
              </h5>
              <p style={{ marginLeft: 30 }}>
                Passed the national entrance examination to engineering schools with a rank of
                353/1106.
              </p>
              <hr className="hl" />
            </div>
          </Grid>

          <Grid item sm={6} className="vl">
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
              <h4 style={{ marginLeft: 30 }}>IoT Intern</h4>
              <h5 style={{ marginLeft: 30, marginBottom: 15 }}>
                Talan Tunisie · Graduation Internship | Feb 2021 - Jun 2021
              </h5>
              <p style={{ marginLeft: 30 }}>
                Development of a Smart Parking solution that ensures reservation and payment
                management for customers via a mobile application.
              </p>
              <hr className="hl" />
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6} className="vl">
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
              <h4 style={{ marginLeft: 30 }}>High School Diploma in Mathematics</h4>
              <h5 style={{ marginLeft: 30, marginBottom: 15 }}>SADIKI High School | 2012 - 2016</h5>
              <p style={{ marginLeft: 30 }}>
                Passed the baccalaureate exam for higher education in mathematics with honors.
              </p>
            </div>
          </Grid>

          <Grid item sm={6} className="vl">
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>
              <h4 style={{ marginLeft: 30 }}>Software Engineer Intern</h4>
              <h5 style={{ marginLeft: 30, marginBottom: 15 }}>
                Avaxia Consulting · Internship | Aug 2020
              </h5>
              <p style={{ marginLeft: 30 }}>
                Design of an air traffic simulator for aviation schools to ensure the communication
                between instructors, controllers and pilots with Unity.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
