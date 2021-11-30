import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            
             <Navbar sticky="top" className='p-3' style={{backgroundColor:'#0a192f',color:''}}>
            <Container>
                <Navbar.Brand as={Link} style={{fontSize:'2em', fontWeight:600, color:'#64ffda'}}>Toufiq</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link style={{color:'#64ffda', fontWeight:600, fontSize:'1.2em'}} as={HashLink} to="/home#home">Home</Nav.Link>
                    
                    <Nav.Link style={{color:'#64ffda', fontWeight:600, fontSize:'1.2em'}}  as={HashLink} to="/about#about">About</Nav.Link>

                    <Nav.Link style={{color:'#64ffda', fontWeight:600, fontSize:'1.2em'}}  as={HashLink} to="/projects#projects">Projects</Nav.Link>

                    <Nav.Link style={{color:'#64ffda', fontWeight:600, fontSize:'1.2em'}}  as={HashLink} to="/contact#contact">Contact</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;