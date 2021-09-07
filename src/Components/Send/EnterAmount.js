import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import BottomNavbar from "../NavBar/BottomNavbar";

const EnterAmount = () => {

    const [receiver, setReceiver] = useState('09970670774');
    const [amount, setAmount] = useState('');

    const handleOnSubmit = (e) => {

    };

    const handleOnChange = (e) => {
        setAmount(e.target.value);
    };

    return ( 
        <>
            <Container fluid>
                
                <Header/>
                
                {/* content start here */}

                    <form onSubmit={handleOnSubmit} className="mt-5">
                    <div className="form-group">
                            <label htmlFor="Receiver" className="mb-2">Receiver</label>
                            <input style={{width: "100%"}} className="" type="number" defaultValue={receiver} readOnly name="phone" placeholder="Enter Receiver Phone" />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="Amount" className="">Amount</label> <br/>
                            <small className="text-danger"><i>Current Balance : 1200 kyats</i></small>
                            <input onChange={handleOnChange} style={{width: "100%"}} className="mt-3" type="number" defaultValue={amount} name="amount" placeholder="10000" />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="Note" className="mb-2">Note</label>
                            <input onChange={handleOnChange} style={{width: "100%"}} className="" type="text" name="note" placeholder="Personal Transfer" />
                        </div>

                        <Link className="btn btn-dark text-center text-white" style={{width: "100%", marginTop: "180px"}} to="/send/confirm">Next</Link>
                    </form>
            
                {/* content end here */}


                <BottomNavbar/>

            </Container>
        </>
    );
}

export default EnterAmount;
