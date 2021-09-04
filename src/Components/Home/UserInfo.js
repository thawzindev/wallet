import { Col, Row } from "react-bootstrap"
import profile from "../../assets/icons/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UserInfo = () => {
    return (
        <Row className="row justify-content-start mt-3 userInfo">
			<Col sm={3}>
                <img src={profile} alt="Profile Picture" width="120%"/>
            </Col>
            <Col sm={9} id="userDetail">
                <div>
                    <p style={{fontSize: "26px", fontWeight: "400"}} id="name">Thaw Zin Htoo</p>     
                    <p id="wallet_amount" style={{fontSize: "20px"}}>1000 kyats <FontAwesomeIcon icon="bell" /></p>
                    <p id="user_level" style={{fontWeight: "100"}}>LEVEL 2</p>
                </div>
            </Col>
		</Row>
    );
}

export default UserInfo;