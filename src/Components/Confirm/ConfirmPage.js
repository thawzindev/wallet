import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import BottomNavbar from '../NavBar/BottomNavbar';
const  ConfirmPage = () => {
    return ( 
        <Container fluid>
                
            <Header/>
            
            {/* confirm contents start here  */}

            <Row class="row justify-content-around" style={{marginTop: "50px"}}>

                <Col sm={6} md={6} className="confirmKey">
                    <p>Service Name :</p>
                </Col>
                <Col sm={6} md={6} className="confirmValue">
                    <p>Mobile Topup</p>
                </Col>

                <Col sm={6} md={6} className="confirmKey">
                    <p>From Account :</p>
                </Col>
                <Col sm={6} md={6} className="confirmValue">
                    <p>Thaw Zin Htoo</p>
                </Col>

                <Col sm={6} md={6} className="confirmKey">
                    <p>Topup Number :</p>
                </Col>
                <Col sm={6} md={6} className="confirmValue">
                    <p>09425025593</p>
                </Col>

                <Col sm={6} md={6} className="confirmKey">
                    <p>Operator :</p>
                </Col>
                <Col sm={6} md={6} className="confirmValue">
                    <p>MPT</p>
                </Col>

                <Col sm={6} md={6} className="confirmKey">
                    <p>Amount :</p>
                </Col>
                <Col sm={6} md={6} className="confirmValue">
                    <p>3,000.00 Kyats</p>
                </Col>

                <Col sm={6} md={6} className="confirmKey">
                    <p>Note :</p>
                </Col>
                <Col sm={6} md={6} className="confirmValue">
                    <p>-</p>
                </Col>



                

            </Row>

            <div style={{marginTop : "250px", marginBottom: "50px"}}>
                <Link class="btn btn-dark text-center text-white" style={{width: "100%"}} to="/topup/enter-passcode">Confirm</Link>
            </div>

            {/* confirm contents end here */}

            <BottomNavbar/>

        </Container>
    );
}

export default ConfirmPage;