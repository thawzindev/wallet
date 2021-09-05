import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

const Header = () => {
    return ( 
        <Row className="row justify-content-between">
            <Col sm={3} xs={3} className="mt-3 text-left">
                <FontAwesomeIcon icon="cog" />
			</Col>
			<Col sm={6} xs={6} className="mt-3">
				<Col className="text-center" id="logo" style={{fontSize: '15px'}}>MM WALLET</Col>
			</Col>
			<Col sm={3} xs={3} className="mt-3" style={{textAlign: 'right'}}>
                <FontAwesomeIcon icon="bell" />
			</Col>
        </Row>
    )
}

export default Header;