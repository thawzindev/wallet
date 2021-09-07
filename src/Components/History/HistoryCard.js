import { Card, Col, Row } from "react-bootstrap";
import Logo from '../../assets/icons/send_money.png';

const HistoryCard = () => {
    return ( 
        <Col sm={12} xs={12}>
            <Card className="shadow mt-3">
                <Card.Body>
                    <Row>
                        <Col sm={2} xs={2}>
                            <div className="float-start">
                                <img src={Logo} width="40" height="40" className="nav-logo d-inline-block align-top mx-auto d-block" />
                            </div>
                        </Col> 
                        <Col sm={5} xs={5} style={{marginLeft: "-15px"}}>
                            <div className="float-start">
                                <h6>Send Money</h6>
                                <small>ID - 1293808083</small> <br/>
                                <small className="mt-1">2021-08-12 01:19 PM </small>
                            </div>
                        </Col>  
                        <Col sm={5} xs={5}>
                            <div className="float-end">
                                <p className="text-danger" style={{textAlign: "right", fontSize: "17px"}}> -100,0000.00 Kyats </p>
                                
                            </div>
                        </Col>  
                    </Row>						
                </Card.Body>
            </Card>
        </Col>
    )
}

export default HistoryCard;