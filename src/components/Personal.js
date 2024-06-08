import personal from "../Assets/personalProject.json";
import { Container, Row, Col } from "react-bootstrap";
const Personal = () => {
  return (
    <Container fluid>
      <Row>
        {personal.projects.map((project) => {
          return (
            <Col md="4">
              <div key={project.name} className="project-card">
                {project.name}
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Personal;
