import { Card, Col, Row } from "react-bootstrap";
import send from "../../assets/icons/send.png";
import receive from "../../assets/icons/receive_money.png";
import history from "../../assets/icons/history.png";
import { Link } from "react-router-dom";

const ServiceCard = () => {
    return ( 
        <Card className="card shadow mt-3" id="serviceCard">
			<Card.Body>
                <Row className="d-flex justify-content-center text-center">
					
					<Col sm={4} xs={4} className="border-right">
						<Link to="/send">
							<img className="serviceImg" src={send} alt="Send" width="40%;"/><br/>
							<span className="serviceName">Send</span>
						</Link>
					</Col>
                    <Col sm={4} xs={4} className="border-right">
						<Link to="/my-qr">
							<img className="serviceImg" src={receive} alt="Receive" width="40%;"/><br/>
							<span className="serviceName">Receive</span>
						</Link>
					</Col>
                    <Col sm={4} xs={4} className="">
						<Link to="/history">
							<img className="serviceImg" src={history} alt="History" width="40%;"/><br/>
							<span className="serviceName">History</span>
						</Link>
					</Col>
            
				</Row>
			</Card.Body>
		</Card>
    );
}

export default ServiceCard;