import { Card, Col, Row } from "react-bootstrap";
import topup from "../../assets/icons/topup.png";
import game from "../../assets/icons/game.png";
import bill_payment from "../../assets/icons/bill_payment.png";
import ticket from "../../assets/icons/ticket.png";
import news from "../../assets/icons/news.png";
import { Link } from "react-router-dom";

const MainServiceCard = () => {
    return ( 
        <Card className="card shadow-lg mainServiceCard mt-2">
			<Card.Body>
				<Row className="d-flex text-center">
					<Col sm={4} xs={4} className="mt-2">
						<Link to="topup">
							<img className="serviceImg" src={topup}  width="40%;" /> <br/>
							<span className="serviceName">Topup</span>
						</Link>
					</Col>
					<Col sm={4} xs={4} className="mt-2">
						<a href="">
							<img className="serviceImg" src={game}  width="40%;" /> <br/>
							<span className="serviceName">Games</span>
						</a>
					</Col>
					<Col sm={4} xs={4} className="mt-2">
						<a href="">
							<img className="serviceImg" src={bill_payment}  width="40%;" /> <br/>
							<span className="serviceName">Bill Payment</span>
						</a>
					</Col>
					<Col sm={4} xs={4} className="mt-2">
						<a href="">
							<img className="serviceImg" src={ticket}  width="40%;" /> <br/>
							<span className="serviceName">Tickets</span>
						</a>
					</Col>
					<Col sm={4} xs={4} className="mt-2">
						<Link to="news">
							<img className="serviceImg" src={news}  width="40%;" /> <br/>
							<span className="serviceName">News</span>
						</Link>
					</Col>
				</Row>
			</Card.Body>
		</Card>
    );
}

export default MainServiceCard;