import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import myResume from "./../Assets/Savitha-Resume-final.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
const Resume = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div style={{ marginTop: "80px" }}>
      <Container fluid style={{ marginTop: "80px" }}>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Button
            variant="primary"
            href={myResume}
            target="_blank"
            style={{
              maxWidth: "250px",
              marginBottom: "20px",
              backgroundColor: "#800080",
              border: "1px solid #800080",
            }}
          >
            <AiOutlineDownload />
            &nbsp; Download CV
          </Button>
        </Row>
        <Row>
          <Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.5 : 0.4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={myResume}
            target="_blank"
            style={{
              maxWidth: "250px",
              backgroundColor: "#800080",
              borderColor: "#800080",
            }}
          >
            <AiOutlineDownload />
            &nbsp; Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
