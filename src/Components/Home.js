import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './Header/Header';
import UserInfo from './Home/UserInfo';
import ServiceCard from './Home/ServiceCard';
import MainServiceCard from './Home/MainServiceCard';
import Slider from './PromoSlider/Slider';
import BottomNavbar from './NavBar/BottomNavbar';

const Home = () => {

    return (
        <>
            <Container fluid>

            <Header/>

                <div className="content">

                        <UserInfo/>

                        <ServiceCard/>

                        <MainServiceCard/>

                        <Slider/>
                
                </div>

            </Container>

            <BottomNavbar/>
        </>
    )
}

export default Home;