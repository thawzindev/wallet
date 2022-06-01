import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card, Badge, Button} from 'react-bootstrap';
import Header from '../Header/Header';
import BottomNavbar from '../NavBar/BottomNavbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import news from "../../assets/covers/news-cover.png";

const News = () => {

    return (

        <>
            <Container fluid>

            <Header/>

                <div className="content">

                <img className="covers w-100 mb-3" src={news} alt="Send" width="100%;"/><br/>

                <Card className="border-0">
                    <div className="card-body">
                        <h4 className="news-title">Shanghai lockdown</h4>
                        <div className="news-info">
                            <span style={{fontSize: '13px'}}><Badge bg="info">Covid</Badge></span>
                            <span style={{fontSize: '13px'}}> | 16 FEB 2021</span>
                        </div>

                        <div className='news-content-preview'>
                            <p className="card-text mt-2">At midnight local time (16:00 GMT Tuesday), restrictions were relaxed to allow most people to move freely around the city of some 25 million people.But at least 650,000 residents will remain confined to their homes.</p>
                        </div>

                        <div>
                            <Button variant="outline-dark float-end" size="sm">Read more ...</Button>
                        </div>
                    </div>
                </Card>

                <hr></hr>

                <Card className="border-0">
                    <div className="card-body">
                        <h4 className="news-title">Shanghai lockdown</h4>
                        <div className="news-info">
                            <span style={{fontSize: '13px'}}><Badge bg="info">Covid</Badge></span>
                            <span style={{fontSize: '13px'}}> | 16 FEB 2021</span>
                        </div>

                        <div className='news-content-preview'>
                            <p className="card-text mt-2">At midnight local time (16:00 GMT Tuesday), restrictions were relaxed to allow most people to move freely around the city of some 25 million people.But at least 650,000 residents will remain confined to their homes.</p>
                        </div>

                        <div>
                            <Button variant="outline-dark float-end" size="sm">Read more ...</Button>
                        </div>
                    </div>
                </Card>

                <hr></hr>

                <Card className="border-0">
                    <div className="card-body">
                        <h4 className="news-title">Shanghai lockdown</h4>
                        <div className="news-info">
                            <span style={{fontSize: '13px'}}><Badge bg="info">Covid</Badge></span>
                            <span style={{fontSize: '13px'}}> | 16 FEB 2021</span>
                        </div>

                        <div className='news-content-preview'>
                            <p className="card-text mt-2">At midnight local time (16:00 GMT Tuesday), restrictions were relaxed to allow most people to move freely around the city of some 25 million people.But at least 650,000 residents will remain confined to their homes.</p>
                        </div>

                        <div>
                            <Button variant="outline-dark float-end" size="sm">Read more ...</Button>
                        </div>
                    </div>
                </Card>

                <hr></hr>

                <Card className="border-0">
                    <div className="card-body">
                        <h4 className="news-title">Shanghai lockdown</h4>
                        <div className="news-info">
                            <span style={{fontSize: '13px'}}><Badge bg="info">Covid</Badge></span>
                            <span style={{fontSize: '13px'}}> | 16 FEB 2021</span>
                        </div>

                        <div className='news-content-preview'>
                            <p className="card-text mt-2">At midnight local time (16:00 GMT Tuesday), restrictions were relaxed to allow most people to move freely around the city of some 25 million people.But at least 650,000 residents will remain confined to their homes.</p>
                        </div>

                        <div>
                            <Button variant="outline-dark float-end" size="sm">Read more ...</Button>
                        </div>
                    </div>
                </Card>

                <hr></hr>

                <Card className="border-0">
                    <div className="card-body">
                        <h4 className="news-title">Shanghai lockdown</h4>
                        <div className="news-info">
                            <span style={{fontSize: '13px'}}><Badge bg="info">Covid</Badge></span>
                            <span style={{fontSize: '13px'}}> | 16 FEB 2021</span>
                        </div>

                        <div className='news-content-preview'>
                            <p className="card-text mt-2">At midnight local time (16:00 GMT Tuesday), restrictions were relaxed to allow most people to move freely around the city of some 25 million people.But at least 650,000 residents will remain confined to their homes.</p>
                        </div>

                        <div>
                            <Button variant="outline-dark float-end" size="sm">Read more ...</Button>
                        </div>
                    </div>
                </Card>
                
                </div>

            </Container>

            <BottomNavbar/>
        </>
        
    )
}

export default News;