import { Col, Container, Row } from "react-bootstrap";
import './aboutUs.css'
const AboutUs = () => {
    return <>
      <Container fluid className="divRelativeAbout">
        <Row>
            <Col xl={8} className="AboutLeft">
                <Row className="spaceAround">
                <Col xl={7} className="mt-5">
                    <h1 className="text-light senFont800 fontSize144">ABOUT US</h1>
                    <p className="text-light poppinsFont600 fontSize18 mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className="btnAboutStyle mt-5">CONTACT US</button>
                </Col>
                </Row>
            </Col>
            <Col xl={4} className="AboutRight">
                <img src="../../../public/cheif.png" alt="" className="aboutImg"/>
            </Col>
        </Row>     
    </Container>
    </>
}

export default AboutUs;
