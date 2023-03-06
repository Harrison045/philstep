import "./Video.css";
import { Link } from "react-router-dom";
// import movie from "../assest/On Scroll Animation in React _ Animation in React 2022.mp4"
import pic from "../assest/javier-grixo-p1opmw12wvk-unsplash.jpg";
import { Col, Container, Row } from "react-bootstrap";
const Video = () => {
  return (
    <div className="hero">
      {/* <video autoPlay muted id="video">
            <source src={On Scroll Animation in React _ Animation in React 2022}></source>
        </video> */}
      <img src={pic} alt="pic" className="pic" />
      <div className="content">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <h1 className="text-center font-lg phil">Phil</h1>
              <h1 className="text-center font-lg phil1">Steps</h1>
              <h1 className="text-center font-lg phil2">Consult</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Video;
