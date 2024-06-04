import firstCompany from "./../Assets/images/cognizant.jpg";
import jsonData from "./../Assets/projects.json";
import Project from "./Project";
import { Container, Row, Col } from "react-bootstrap";
const Projects = () => {
  return (
    <Container fluid style={{ marginTop: "2.5rem" }}>
      <h3>
        <b>Work Experience:</b>
      </h3>
      <Row style={{ alignItems: "center" }}>
        {jsonData.projects.map((project) => (
          <Col md={6}>
            <Project project={project} key={project.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
