import femaleImage from "./../Assets/images/4706239.png";
import Intro from "./Intro";
import Typewriter from "typewriter-effect";
import BgParticle from "./BackgroundParticles";

import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ paddingLeft: "160px", paddingRight: "2.5rem" }}>
      <Container fluid style={{ marginTop: "1.5rem" }}>
        <Row style={{ alignItems: "center" }}>
          <Col md={6}>
            <div className="headings">
              <h1>
                Hi There!{" "}
                <span className="hand" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1>
                I'M <span style={{ color: "#800080" }}>SAVITHA GUNDA</span>
              </h1>
              &nbsp;
              <h1 style={{ color: "#800080" }}>
                <Typewriter
                  options={{
                    strings: ["React Developer", "MERN Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="home-img">
              <img
                src={femaleImage}
                alt="female programmer"
                width="500"
                height="400"
                className="femaleImage"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Intro />
    </div>
  );
};

export default Home;
