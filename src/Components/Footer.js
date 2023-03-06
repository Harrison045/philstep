import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={1}>
            <Link to="/">Home</Link>
          </Col>
          <Col md={1}>
            <Link to="/about">About</Link>
          </Col>
          <Col md={1}>
            <Link to="/services">Services</Link>
          </Col>
          <Col md={1}>
            <Link to="/contact">Contact</Link>
          </Col>
          <Col className="logo3">
            <img src="PHILSTEPS LOGO.png" alt="philsteps" className="logo2" />
          </Col>
          <Col md={4}>&copy; 2023 PhilSteps Consults. All rights reserved</Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Footer;
