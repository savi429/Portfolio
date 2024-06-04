import firstCompany from "./../Assets/images/cognizant.jpg";
import jsonData from "./../Assets/projects.json";
import Project from "./Project";
import { Container, Row, Col } from "react-bootstrap";
const Projects = () => {
  return (
    <Container fluid style={{ marginTop: "1.5rem" }}>
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
