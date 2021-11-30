import React from 'react';
import { Card, Col, Container,  Row } from 'react-bootstrap';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{backgroundColor:'#0a192f'}}>
            <Container>
                <Row>
                    <Col  >
                    <Card className='mt-5 p-4' style={{width:'100%',height:'400px',backgroundColor:'#0a192f' }}>
                        <Card.Body className=" mx-5">
                            <Card.Title style={{color:'white'}}> <span style={{fontSize:'2em', fontWeight:'bolder'}}>Hi, I'm</span> <br /> <span style={{fontSize:'4vw', fontWeight:'bolder'}}>Toufiqul Islam Anim</span></Card.Title>
                            
                            <Card.Text style={{color:'white', fontSize:'1.5em', fontWeight:'bold'}} className='mb-5'>
                                I'm a Junior Web Developer
                            </Card.Text>
                            <Card.Link  href="#" style={{backgroundColor:'#0a192f', color:'#64ffda',border:'1px solid #64ffda', textDecoration:'none', fontSize:'1em'}} className='px-5 py-3 rounded '>Download Resume</Card.Link>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                   
                </Row>
            </Container>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;