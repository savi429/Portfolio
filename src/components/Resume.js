import myResume from "./../Assets/Savitha Gunda Developer.pdf";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        padding: "2.5rem",
      }}
    >
      <Container fluid className="resume-section">
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "10px",
          }}
        >
          <Button
            variant="primary"
            href={myResume}
            target="_blank"
            style={{
              maxWidth: "250px",
              backgroundColor: "#c95bf5",
              color: "white",
              borderColor: "#c95bf5",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={myResume} className="d-flex justify-content-center">
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "10px",
          }}
        >
          <Button
            variant="primary"
            href={myResume}
            target="_blank"
            style={{
              maxWidth: "250px",
              backgroundColor: "#c95bf5",
              color: "white",
              borderColor: "#c95bf5",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
