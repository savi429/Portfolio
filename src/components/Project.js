import { Container, Row, Col } from "react-bootstrap";

const Project = ({ project }) => {
  const { name, description, domain, company } = project;
  return (
    <section>
      <h1>{company}</h1>
      <h2>
        {name} - {domain}
      </h2>
      <p>{description}</p>
    </section>
  );
};

export default Project;
