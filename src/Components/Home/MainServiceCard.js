import { Card, Col, Row } from "react-bootstrap";
import topup from "../../assets/icons/topup.png";
import game from "../../assets/icons/game.png";
import bill_payment from "../../assets/icons/bill_payment.png";
import ticket from "../../assets/icons/ticket.png";

const MainServiceCard = () => {
    return ( 
        <Card className="card shadow-lg mainServiceCard mt-4">
			<Card.Body>
				<Row className="d-flex text-center">
					<Col sm={4} className="mt-3">
						<a href="topup.html">
							<img className="serviceImg" src={topup}  width="40%;" /> <br/>
							<span className="serviceName">Topup</span>
						</a>
					</Col>
					<Col sm={4} className="mt-3">
						<a href="">
							<img className="serviceImg" src={game}  width="40%;" /> <br/>
							<span className="serviceName">Games</span>
						</a>
					</Col>
					<Col sm={4} className="mt-3">
						<a href="">
							<img className="serviceImg" src={bill_payment}  width="40%;" /> <br/>
							<span className="serviceName">Bill Payment</span>
						</a>
					</Col>
					<Col sm={4} className="mt-3">
						<a href="">
							<img className="serviceImg" src={ticket}  width="40%;" /> <br/>
							<span className="serviceName">Tickets</span>
						</a>
					</Col>
				</Row>
			</Card.Body>
		</Card>
    );
}

export default MainServiceCard;