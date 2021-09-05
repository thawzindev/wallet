import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import BottomNavbar from "../NavBar/BottomNavbar";
import success from '../../assets/success.png'

const SuccessPage = () => {
    return ( 
        <Container fluid>
                
            <Header/>
            
            {/* success contents start here */}

            <div class="row justify-content-around text-center mt-5">

                <div class="col-4 mt-3">
                    <img src={success} width="70%" />
                </div>

                <div class="col-10 mt-5">
                    <h3><b>Topup successfully.</b></h3>
                </div>

                <div class="col-10 mt-2">
                    <Link className="text-success" to="/">
                        Go to transaction detail
                    </Link>
                </div>


                <div class="col-12" style={{marginTop: "330px"}}>
                    <Link class="btn btn-dark text-center text-white" style={{width: "100%"}} to="/">Back to Home</Link>
                </div>

		    </div>

            {/* success contents end here */}

            <BottomNavbar/>

        </Container>
    );
}

export default SuccessPage;