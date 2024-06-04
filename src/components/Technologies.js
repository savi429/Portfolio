import {
  DiReact,
  DiNodejs,
  DiCss3,
  DiHtml5,
  DiGit,
  DiMongodb,
  DiJavascript1,
  DiSass,
} from "react-icons/di";
import { BiLogoRedux } from "react-icons/bi";
import { SiWebpack, SiJest, SiTypescript, SiExpress } from "react-icons/si";
import { Row, Col } from "react-bootstrap";

const Technologies = () => {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="skill">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="skill">
          <SiTypescript />
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiSass />
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="skill">
          <SiExpress />
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="skill">
          <DiGit />
        </Col>

        <Col xs={4} md={2} className="skill">
          <BiLogoRedux />
        </Col>
        <Col xs={4} md={2} className="skill">
          <SiWebpack />
        </Col>
        <Col xs={4} md={2} className="skill">
          <SiJest />
        </Col>
      </Row>
    </div>
  );
};

export default Technologies;
