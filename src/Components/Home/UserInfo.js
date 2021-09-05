import React, {useState} from 'react';
import { Col, Row, Badge } from "react-bootstrap"
import profile from "../../assets/icons/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UserInfo = () => {

    const [user, setUser] = useState({"name" : "Thaw Zin Htoo", "amount" : "10,000.00", "userLevel" : 2});

    const [walletVisible, setWalletVisible] = useState(true);

    const handleWalletVisible = () => {
        setWalletVisible(!walletVisible);
    };

    return (
        <Row className="row justify-content-start mt-3 userInfo">
			<Col sm={3} xs={3}>
                <img src={profile} alt="Profile Picture" width="120%"/>
            </Col>
            <Col sm={9} xs={8} id="userDetail">
                <div>
                    <p style={{fontSize: "26px", fontWeight: "400"}} id="name">{user.name}</p>     
                    <p id="wallet_amount" style={{fontSize: "20px"}}>
                        {walletVisible === true ? user.amount : "******"} kyats 
                        <FontAwesomeIcon icon={walletVisible === true ? 'eye-slash' : 'eye'} className="mx-2" onClick={handleWalletVisible}/>
                    </p>
                    <p id="user_level" style={{fontWeight: "100"}}><Badge bg="success">LEVEL {user.userLevel}</Badge></p>
                    
                </div>
            </Col>
		</Row>
    );
}

export default UserInfo;