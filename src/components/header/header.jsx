import { Col, Container, Row } from "react-bootstrap";
import "./header.css"
const Header = () => {
    return <>
    <Container fluid className="divRelative">
        <Row>
            <Col xl={8} className="headerLeft">
                <Row className="spaceAround">
                    <Col xl={2}>
                    <div className="titleDiv">
                    <h3 className="text-light mt-4 fontSize28 senFont700">PEACHY PUP BAKERY</h3>
                    </div>
                    </Col>
                </Row>
                <Row className="spaceAround">
                <Col xl={7}>
                    <h1 className="text-light senFont800 fontSize74">TASTY PASTRIES</h1>
                    <p className="text-light poppinsFont600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the</p>
                    <button className="btnHeaderStyle">SEE MORE</button>
                </Col>
                </Row>
                <Row>
                <Col xl={4} className="whiteColor">
                    <img src="../../../public/Mask Group (2).png" alt="" className="imgsInHeader" />
                </Col>
                
                <Col xl={6} className="telephoneStyle">
                    <h3 className="poppinsFont700">Telephone: <span className="poppinsFont500">+7 700 000 00 00</span></h3>
                </Col>
                </Row>
            </Col>
            <Col xl={4} className="headerRight">
                <img src="../../../public/Mask Group.png" alt="" className="imgHeader"/>
            </Col>
        </Row>
        <div className="divAbsolute">
            <img src="../../../public/headerCover.png" alt="" className="img-fluid"/>
        </div>
        

    </Container>
    </>
}

export default Header;
