import { Container, Row, Col } from "react-bootstrap";
import Cognizant from "../Assets/images/cognizant_logo.jpg";
import Purpletalk from "../Assets/images/purple_talk_logo.jpg";
const Project = ({ project }) => {
  const { role, duration, description, company } = project;
  const imageUrl = company === "Cognizant" ? Cognizant : Purpletalk;
  return (
    <section className="skill">
      <div style={{ textAlign: "center" }}>
        <img
          src={imageUrl}
          alt="company logo"
          height="50px"
          width="50px"
          className="imag-circle"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>{company}</h1>
        <h3>{role}</h3>
        <p style={{ fontSize: "1.2rem" }}>{duration}</p>
      </div>
      <p style={{ fontSize: "1.2rem" }}>{description}</p>
    </section>
  );
};

export default Project;
