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

                <div className="content">

                    <MyQr/>

                    <div className="text-center mt-3">
                        <p>Scan QR Code (or) manually enter below phone number.</p>
                        <h5><b>09425025593</b></h5>
                        {/* <h6 className="pt-2"><button className="btn btn-info">Save QR</button></h6> */}
                    </div>


                </div>

            </Container>

            <BottomNavbar/>
        </>
    );
}

export default MyQrPage;