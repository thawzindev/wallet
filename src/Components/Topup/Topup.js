import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../Header/Header';
import BottomNavbar from '../NavBar/BottomNavbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mpt from "../../assets/operators/mpt.png";
import telenor from "../../assets/operators/telenor.png";
import ooredoo from "../../assets/operators/ooredoo.png";
import { Link } from 'react-router-dom';
import {phoneValidate, operatorCheck} from '../../services/helpers';


const Topup = () => {

    const [phone, setPhone] = useState('09970670774');
    const [operator, setOperator] = useState('');
    const [inputColor, setInputColor] = useState('green');

    const handleNumberOnChange = (e) => {
        phoneValidate(e.target.value) ? setInputColor('green') : setInputColor('red');
        setPhone(e.target.value);
    };

    useEffect(() => {
        setOperator(operatorCheck(phone));
    }, [phone]);

    const handleSubmit = () => {
        
    };


    return ( 
        <Container fluid>
                
            <Header/>

            {/* topup content start here */}


            <form onSubmit={handleSubmit}>
                <div className="justify-content-center mt-5" >

                        <span className="px-3" >
                            <FontAwesomeIcon icon="mobile-alt" size={'lg'} />
                        </span>
                        <span>
                            <input style={{borderColor: inputColor}} className="mt-1" type="number" defaultValue={phone} name="phone" id="phone" onChange={handleNumberOnChange}/> <br/>
                            { inputColor === 'red' ? 
                                <small className="px-5 text-danger">
                                    Wrong phone number! 
                                </small> 
                            : '' }
                        </span>

                </div>

                <h5 className="pt-3">Operators</h5>

                <Row className="mt-4">

                    <Col sm={2} xs={2}>
                        <img src={mpt} className={operator === 'mpt' ? 'selectedOperator' : ''} width="40;" />
                    </Col>
                    <Col sm={2} xs={2}>
                        <img src={telenor} className={operator === 'telenor' ? 'selectedOperator' : ''} width="40;" />
                    </Col>
                    <Col sm={2} xs={2}>
                        <img src={ooredoo} className={operator === 'ooredoo' ? 'selectedOperator' : ''} width="40;" />
                    </Col>
                        
                </Row>


                <hr/>

                <h5 className="pt-3">Choose Topup Amount</h5>
                <small className="text-danger"><i>Current Balance : 1200 kyats</i></small>

                <Row className="mt-2">

                    <Col sm={4} xs={4} className="mt-3">
                        <div className="form-check">
                        <input className="form-check-input topup-amount" type="radio" name="exampleRadios" value="1000" defaultChecked />
                        <label className="form-check-label topup-label">
                            1,000
                        </label>
                        </div>
                    </Col>

                    <Col sm={4} xs={4} className="mt-3">
                        <div className="form-check">
                        <input className="form-check-input topup-amount" type="radio" name="exampleRadios" value="3000" />
                        <label className="form-check-label topup-label">
                            3,000
                        </label>
                        </div>
                    </Col>

                    <Col sm={4} xs={4} className="mt-3">
                        <div className="form-check">
                        <input className="form-check-input topup-amount" type="radio" name="exampleRadios" value="5000" />
                        <label className="form-check-label topup-label" >
                            5,000
                        </label>
                        </div>
                    </Col>

                    <Col sm={4} xs={4} className="mt-3">
                        <div className="form-check">
                        <input className="form-check-input topup-amount" type="radio" name="exampleRadios" value="10000" />
                        <label className="form-check-label topup-label" >
                            10,000
                        </label>
                        </div>
                    </Col>

                    <Col sm={4} xs={4} className="mt-3">
                        <div className="form-check">
                        <input className="form-check-input topup-amount" type="radio" name="exampleRadios" value="20000" />
                        <label className="form-check-label topup-label" >
                            20,000
                        </label>
                        </div>
                    </Col>

                    <div style={{marginTop : "180px"}}>
                        <Link className="btn btn-dark text-center text-white" style={{width: "100%"}} to="topup/confirm">Next</Link>
                    </div>

                </Row>
            </form>


            {/* topup content end here */}
            
            <BottomNavbar/>

        </Container>
    );
}

export default Topup;