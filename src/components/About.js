import { Container, Row, Col } from "react-bootstrap";
import Technologies from "./Technologies";
import typingImg from "./../Assets/images/2824236.jpg";
const About = () => {
  return (
    <div style={{ paddingLeft: "160px", paddingRight: "2.5rem" }}>
      <section
        className="about"
        style={{
          display: "flex",
          // justifyContent: "space-around",
          marginTop: "1.5rem",
        }}
      >
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
            I love learning new technologies and I always update my skills width
            latest industry standards and technologies.
          </p>
        </div>
        <div style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <img src={typingImg} alt="about img" width="300" height="300" />
        </div>
      </section>
      <div>
        <h1>PROFESSIONAL SKILLS</h1>
        <Technologies />
      </div>
    </div>
  );
};

export default About;
