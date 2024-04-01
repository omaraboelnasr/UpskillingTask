import "./Testymonials.css";
import star from "../../../public/Group 30.png";
import { Col, Container, Row } from "react-bootstrap";

export default function Testymonials() {
  return (
    <div className="testy my-5" style={{ height: "898px" }}>
        <div
          className="testy-text mx-auto text-center pt-5"
          style={{
            width: "1153px",
            height: "138px",
          }}
        >
          <p>TESTYMONIALS</p>
        </div>
          <Container style={{width:'1100px'}} className="pt-5">
          <Row className="justify-content-between my-5  ">
            <Col md={5}>
            <div
              className=" mb-5 p-4 rounded-4 border border-1 d-flex flex-wrap  align-items-center bg-white"
              style={{ width: "512px", height: "192px" }}
            >
              <div className="testy-head">
                <p>Courtney Henry</p>
              </div>
              <div className="testy-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
              <div style={{ width: "114px", height: "18px" }}>
                <img src={star} alt="" />
              </div>
            </div>
            </Col>
            <Col md={5}>
            <div
              className=" mb-5 p-4 rounded-4 border border-1 d-flex flex-wrap  align-items-center bg-white"
              style={{ width: "512px", height: "192px" }}
            >
              <div className="testy-head">
                <p>Courtney Henry</p>
              </div>
              <div className="testy-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
              <div style={{ width: "114px", height: "18px" }}>
                <img src={star} alt="" />
              </div>
            </div>
            </Col>
          </Row>
          <Row className="justify-content-between my-5  ">
            <Col md={5}>
            <div
              className=" mb-5 p-4 rounded-4 border border-1 d-flex flex-wrap  align-items-center bg-white"
              style={{ width: "512px", height: "192px" }}
            >
              <div className="testy-head">
                <p>Courtney Henry</p>
              </div>
              <div className="testy-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
              <div style={{ width: "114px", height: "18px" }}>
                <img src={star} alt="" />
              </div>
            </div>
            </Col>
            <Col md={5}>
            <div
              className=" mb-5 p-4 rounded-4 border border-1 d-flex flex-wrap  align-items-center bg-white"
              style={{ width: "512px", height: "192px" }}
            >
              <div className="testy-head">
                <p>Courtney Henry</p>
              </div>
              <div className="testy-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
              <div style={{ width: "114px", height: "18px" }}>
                <img src={star} alt="" />
              </div>
            </div>
            </Col>
          </Row>              
          </Container>
        <button className="btnAboutStyle position-relative start-50 translate-middle-x ">
          CONTACT US
        </button>
      </div>
  );
}
