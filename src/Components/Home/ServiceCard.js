import { Card, Col, Row } from "react-bootstrap";
import send from "../../assets/icons/send_money.png";
import receive from "../../assets/icons/receive_money.png";
import history from "../../assets/icons/history.png";

const ServiceCard = () => {
    return ( 
        <Card className="card shadow mt-3" id="serviceCard">
			<Card.Body>
                <Row className="d-flex justify-content-center text-center">
					
					<Col sm={4} className="border-right">
						<a href="sent.html">
							<img className="serviceImg" src={send} alt="Send" width="40%;"/><br/>
							<span className="serviceName">Send</span>
						</a>
					</Col>
                    <Col sm={4} className="border-right">
						<a href="sent.html">
							<img className="serviceImg" src={receive} alt="Receive" width="40%;"/><br/>
							<span className="serviceName">Receive</span>
						</a>
					</Col>
                    <Col sm={4} className="">
						<a href="sent.html">
							<img className="serviceImg" src={history} alt="History" width="40%;"/><br/>
							<span className="serviceName">History</span>
						</a>
					</Col>
            
				</Row>
			</Card.Body>
		</Card>
    );
}

export default ServiceCard;