import jsonData from "./../Assets/projects.json";
import Project from "./Project";
import { Container, Row, Col } from "react-bootstrap";
// import Personal from "./Personal";
const Projects = () => {
  return (
    <Container
      fluid
      style={{
        width: "90%",
        margin: "0 auto",
        padding: "2.5rem",
      }}
    >
      <h3>
        <b>Work Experience:</b>
      </h3>
      <Row style={{ alignItems: "center" }}>
        {jsonData.projects.map((project) => (
          <Col md="6">
            <Project project={project} key={project.id} />
          </Col>
        ))}
      </Row>
      {/* <Personal /> */}
    </Container>
  );
};

export default Projects;
