import React, {useRef, useEffect} from 'react';
import Header from "../Header/Header";
import BottomNavbar from "../NavBar/BottomNavbar";
import MyQr from './MyQr';
import { Container } from "react-bootstrap";

const MyQrPage = () => {

    return ( 
        <>
            <Container fluid>
                
                <Header/>

                    <MyQr/>

                    <div className="text-center mt-5 mb-5">
                        <p>Scan QR Code (or) manually enter below phone number.</p>
                        <h5><b>09425025593</b></h5>
                        <h6 className="pt-5"><button className="btn btn-danger">Save QR</button></h6>
                    </div>

                <BottomNavbar/>

            </Container>
        </>
    );
}

export default MyQrPage;