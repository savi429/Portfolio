import girl from "./../Assets/images/girl.png";
import { Container, Row, Col } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container fluid>
        <Row>
          <Col md={6} xs={10}>
            <section>
              <h3>LET ME INTRODUCE MYSELF</h3>
              <p>Over 6 years of experrience in working in React.JS</p>
              <p>
                Expertise in{" "}
                <span style={{ color: "#800080", fontStyle: "bold" }}>
                  React.JS, Node.JS, Express.JS and Next.JS
                </span>
              </p>
              <p>
                As a front-end developer worked on multiple domains like
                airways, enterprise, healthcar, ecommerce
              </p>
              <p>
                I always staying up to date with latest trends and technologies{" "}
              </p>
            </section>
          </Col>
          <Col md={6} xs={10} style={{ textAlign: "center" }}>
            <img
              src={girl}
              alt="programmer"
              width="200"
              height="200"
              className="my-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
