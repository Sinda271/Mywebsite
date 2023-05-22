import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import assets from '../constants';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>SKILLS</h2>
              <p>
                I have gained experience in various domains so far<br></br>
              </p>
              <Carousel
                renderButtonGroupOutside={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                itemClass="item"
              >
                <div>
                  <img src={assets.skill} alt="" />
                  <h3 style={{ position: 'relative', marginTop: -115, marginBottom: 85 }}>80%</h3>
                  <h5>Artificial Intelligence</h5>
                </div>
                <div>
                  <img src={assets.skill} alt="" />
                  <h3 style={{ position: 'relative', marginTop: -115, marginBottom: 85 }}>65%</h3>
                  <h5>Web/Mobile Development</h5>
                </div>
                <div>
                  <img src={assets.skill} alt="" />
                  <h3 style={{ position: 'relative', marginTop: -115, marginBottom: 85 }}>65%</h3>
                  <h5>Cloud Computing</h5>
                </div>
                <div>
                  <img src={assets.skill} alt="" />
                  <h3
                    style={{
                      position: 'relative',
                      marginTop: -115,
                      marginBottom: 85,
                      fontFamily: assets.FONTS.bold
                    }}
                  >
                    70%
                  </h3>
                  <h5>Internet of Things</h5>
                </div>
                <div>
                  <img src={assets.skill} alt="" />
                  <h3
                    style={{
                      position: 'relative',
                      marginTop: -115,
                      marginBottom: 85,
                      fontFamily: assets.FONTS.bold
                    }}
                  >
                    80%
                  </h3>
                  <h5>Game Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
