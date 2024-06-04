import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Header1 = () => {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={`${isBottom ? "header sticky" : "header"}`}
      fixed="top"
    >
      <Container fluid="md">
        <Navbar.Brand as={Link} to="/" style={{ color: "#800080" }}>
          SG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FiMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header1;
