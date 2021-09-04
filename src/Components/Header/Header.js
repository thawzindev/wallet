import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

const Header = () => {
    return ( 
        <Row className="row justify-content-between">
            <Col sm={4} className="mt-3 text-left">
                <FontAwesomeIcon icon="cog" />
			</Col>
			<Col sm={4} className="mt-3">
				<Col className="text-center" id="logo" style={{fontSize: '20px'}}><b>MM WALLET</b></Col>
			</Col>
			<Col sm={4} className="mt-3" style={{textAlign: 'right'}}>
                <FontAwesomeIcon icon="bell" />
			</Col>
        </Row>
    )
}

export default Header;