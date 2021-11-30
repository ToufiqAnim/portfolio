
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import project1 from '../../image/project1.png';
import project2 from '../../image/project2.png';
import project3 from '../../image/project3.png';
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
const Projects = () => {
    return (
        <div id='projects'>
            <Container>
                <h1 className="text-center my-5 fw-bold" style={{color:'#64ffd4'}}>Projects</h1>
                <Row>
                    <Col xs={12} sm={4} className='mt-4 '>
                    <Card className='border-0 shadow' style={{backgroundColor:'#112240'}}>
                        <Card.Img variant="top" src={project1} />
                        <Card.Body>
                        <Card.Text style={{color:'#ccd6f6'}}>
                                React Material Ui Express Node Heroku
                                <span className='mx-auto'>
                            <a className="mx-3" href="https://github.com/ToufiqAnim/car-sell-website" target="_blank" rel="noopener noreferrer" ><BsGithub className='fs-3'/></a>

                            <a href="https://car-shop-a0334.web.app/" target="_blank" rel="noopener noreferrer"><GoLinkExternal className='fs-3'/></a>
                            </span>
                            </Card.Text>
                            <Card.Title className='fs-3' style={{color:'#ccd6f6'}}>Highline Motors
                            
                            </Card.Title>
                            <Card.Text style={{color:'#ccd6f6'}}>
                            Full Stack Web Design
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} sm={4} className='mt-4 '>
                    <Card className='border-0 shadow' style={{backgroundColor:'#112240'}}>
                        <Card.Img variant="top" src={project2} />
                        <Card.Body>
                        <Card.Text style={{color:'#ccd6f6'}}>
                                React Material Ui Express Node Heroku
                                <span>
                                <a className="mx-3" href="https://github.com/ToufiqAnim/tourism-website.git" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-3'/></a>
                            
                            <a href="https://tourism-assignment-3a436.web.app/home" target="_blank" rel="noopener noreferrer"><GoLinkExternal className='fs-3'/></a>
                                </span>
                            </Card.Text>
                            <Card.Title className='fs-3' style={{color:'#ccd6f6'}}>TourPlus
                            
                            </Card.Title>
                            <Card.Text style={{color:'#ccd6f6'}}>
                                Full Stack web Design
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} sm={4} className='mt-4 '>
                    <Card className='border-0 shadow' style={{backgroundColor:'#112240'}}>
                        <Card.Img variant="top" src={project3} />
                        <Card.Body>
                        <Card.Text style={{color:'#ccd6f6'}}>
                                React Bootstap 
                                <span>
                                <a className="mx-3" href="https://github.com/ToufiqAnim/healthcare-website" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-3'/></a>
                            
                            <a href="https://health-care-404a9.web.app/" target="_blank" rel="noopener noreferrer"><GoLinkExternal className='fs-3'/></a>
                                </span>
                            </Card.Text>
                            <Card.Title className='fs-3' style={{color:'#ccd6f6'}}>MediPlus
                            
                            </Card.Title>
                            <Card.Text style={{color:'#ccd6f6'}}>
                                Responsive web Design
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;