import React, {useEffect, useState} from 'react';
import ScanQr from './ScanQr';
import Header from '../Header/Header';
import BottomNavbar from '../NavBar/BottomNavbar';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {phoneValidate, operatorCheck} from '../../services/helpers';
import { Link } from 'react-router-dom';

const SendMoney = () => {

    const [inputColor, setInputColor] = useState('red');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNumberOnChange = (e) => {
        setPhoneNumber(e.target.value);
        phoneValidate(e.target.value) ? setInputColor('green') : setInputColor('red');
    };

    const handleOnSubmit = (e) => {

    }

    return ( 
        <>
            <Container fluid>

            <Header/>

                <div className="content">

                {/* content start here */}

                    <ScanQr />

                    <p className="mt-2" style={{fontSize: "17px"}}>Scan QR (or) enter phone number manually to go next.</p>

                    <div className="mt-2">
                        <form onSubmit={handleOnSubmit}>

                            <span className="px-3" >
                                <FontAwesomeIcon icon="id-badge" size={'lg'} />
                            </span>

                            <span>
                                <input style={{borderColor: inputColor}} className="mt-1" type="number" defaultValue={phoneNumber} name="phone" id="phone" onChange={handleNumberOnChange}/> <br/>
                                { phoneNumber == '' ? 
                                    <small className="px-5 text-danger">
                                        Enter Phone Number!
                                    </small> :  inputColor === 'red' ? 
                                    <small className="px-5 text-danger">
                                        Wrong Phone Number!
                                    </small> 
                                : '' }
                                
                            </span>

                            <Link to="/send/enter-amount" className="btn btn-dark mt-3 text-white" style={{width: "100%"}}>Next</Link>

                        </form>
                    </div>

                {/* content end here */}

                </div>

            </Container>

            <BottomNavbar/>
        </>
    );
}

export default SendMoney;