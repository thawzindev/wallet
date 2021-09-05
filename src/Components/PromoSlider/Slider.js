import { Card, Col, Row } from "react-bootstrap";
import topup from "../../assets/icons/topup.png";
import game from "../../assets/icons/game.png";
import bill_payment from "../../assets/icons/bill_payment.png";
import ticket from "../../assets/icons/ticket.png";

const Slider = () => {
    return ( 
        <Card className="shadow mt-2" id="promoSliders">
			<Card.Body>
				<Card.Title className="mb-4" style={{marginTop : "-8px"}}>
					<h6>Promotions</h6>
				</Card.Title>

				<div id="slider" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
					    <div className="carousel-item active">
					      <img className="d-block w-100" src="https://tpay.telenor.com.mm/storage/widgets/sliders/1574968848WZu6nW.png" alt="First slide" />
					    </div>
					    <div className="carousel-item">
					      <img className="d-block w-100" src="..." alt="Second slide" />
					    </div>
					    <div className="carousel-item">
					      <img className="d-block w-100" src="..." alt="Third slide" />
					    </div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					</a>
				    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="sr-only">Next</span>
				    </a>
				</div>
			</Card.Body>
		</Card>
    );
}

export default Slider;