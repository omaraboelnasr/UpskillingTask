import './howWork.css'
import { Col, Container, Row } from "react-bootstrap";

const HowWork = () => {
    return <>
    <Container fluid>
        <Row className='relativeWork'>
        <Col xl={4} className='leftSection'>
            <Row>
                <Col xl={6}>
                    <div className='textSec'>
                        <p className='poppinsFont600 paraText '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the</p>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col xl={8} className='rightSection'>
            <Row className='justify-content-center paddingStyleWork'>
                <Col xl={7}>
                <p className='senFont800 titleTexTstyle'>HOW WE WORK</p>
                </Col>
            </Row>
        </Col>
        <Row className='justify-content-evenly mx-auto absoluteWork' style={{width:'80%',height:'304px'}}>
            <Col xl={2}>
                <img src="../../../public/b1.png" alt="" style={{width:'305px',height:'304px'}}/>
            </Col>
            <Col xl={2}>
                <img src="../../../public/b2.png" alt="" style={{width:'305px',height:'304px'}}/>
            </Col>
            <Col xl={2}>
                <img src="../../../public/b3.png" alt="" style={{width:'305px',height:'304px'}}/>
            </Col>
            <Col xl={2}>
                <img src="../../../public/b4.png" alt="" style={{width:'305px',height:'304px'}}/>
            </Col>
        </Row>
        <Row>
        <Col xl={2}>
        <button className="btnHowWork btnAbsoluteWork">SEE MORE</button>
            </Col>
        </Row>
        

        </Row>

    </Container>
    </>
}

export default HowWork;
