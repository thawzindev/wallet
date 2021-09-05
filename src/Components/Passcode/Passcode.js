import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import BottomNavbar from "../NavBar/BottomNavbar";
import './Passcode.css';

const Passcode = () => {

    const addNumber = (e) => {
        let v = document.getElementById('PINbox').value();
        console.log(v);
		document.getElementById('PINbox').value( v + e.value );
    };

    const clearForm = () => {

    };

    const submitForm = () => {

    };

    const PINbox = () => {

    };
 
    return ( 
        <Container fluid>
                
            <Header/>

            {/* passcode content start here */}

            <div className="row justify-content-center text-center mt-5">

                <div id="PINcode">
                    <form action='' method='' name='PINform' id='PINform' autocomplete='off' draggable='true'>
                        <input id='PINbox' type='password' value='' name='PINbox' disabled />
                        <br/>
                        <input type='button' className='PINbutton' name='1' value='1' id='1' onclick="addNumber(this);" />
                        <input type='button' className='PINbutton' name='2' value='2' id='2' onclick="addNumber(this);" />
                        <input type='button' className='PINbutton' name='3' value='3' id='3' onclick="addNumber(this);" />
                        <br/>
                        <input type='button' className='PINbutton' name='4' value='4' id='4' onclick="addNumber(this);" />
                        <input type='button' className='PINbutton' name='5' value='5' id='5' onclick="addNumber(this);" />
                        <input type='button' className='PINbutton' name='6' value='6' id='6' onclick="addNumber(this);" />
                        <br/>
                        <input type='button' className='PINbutton' name='7' value='7' id='7' onclick="addNumber(this);" />
                        <input type='button' className='PINbutton' name='8' value='8' id='8' onclick="addNumber(this);" />
                        <input type='button' className='PINbutton' name='9' value='9' id='9' onclick="addNumber(this);" />
                        <br/>
                        <input type='button' className='PINbutton clear' name='-' value='clear' id='-' onclick={clearForm(this)} />
                        <input type='button' className='PINbutton' name='0' value='0' id='0' onclick="addNumber(this);" />
                        <input type='button' className='PINbutton enter' name='+' value='delete' id='+' onclick={submitForm(PINbox)} />
                    </form>
                </div>

                <div style={{marginTop: "100px", marginBottom: "50px"}}>
                    <Link className="btn btn-dark text-center text-white" style={{width: "100%"}} to="success">Submit</Link>
                </div>

            </div>

            {/* passcode content end here */}

            <BottomNavbar/>

        </Container>
    );
}

export default Passcode;