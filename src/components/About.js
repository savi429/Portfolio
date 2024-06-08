import { Container, Row, Col } from "react-bootstrap";
import Technologies from "./Technologies";
import typingImg from "./../Assets/images/2824236.jpg";
const About = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        padding: "2.5rem",
      }}
    >
      <Container fluid>
        <Row style={{ alignItems: "center" }}>
          <Col md="6">
            <div>
              <h1>About Myself</h1>
              <p>Hello Everyone myself Savitha Gunda. I am a React Developer</p>
              <br />
              <p>
                experience in building web applications using JavaScript and
                React.js library.
              </p>
              <p>
                My goal is to create user friendly websites that provide an
                excellent UX/UI
              </p>
              <p>
                I love learning new technologies and I always update my skills
                width latest industry standards and technologies.
              </p>
            </div>
          </Col>

          <Col md={6}>
            {" "}
            <div
              className="home-img"
              // style={{
              //   paddingTop: "120px",
              //   paddingBottom: "120px",
              //   widht: "2.5rem",
              //   height: "auto",
              // }}
            >
              <img src={typingImg} alt="about img" width="300" height="300" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* </section> */}
      <div>
        <h3
          style={{
            textAlign: "left",
            paddingLeft: "1.6rem",
            fontSize: "1.5rem",
          }}
        >
          PROFESSIONAL SKILLS:
        </h3>
        <Technologies />
      </div>
    </div>
  );
};

export default About;
