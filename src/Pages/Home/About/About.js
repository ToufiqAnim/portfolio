import React from 'react';
import { Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import image from '../../image/Toufiq.jpg';
import './About.css';


const About = () => {
    return (
        <div id='about' className='mb-5'>
           <Container>
               <h1 className='text-center mt-5 ms-5 fw-bold' style={{color:'#64ffd4'}}>About Me</h1> <hr className='mb-5 mx-auto w-25 ' style={{color:'#64ffd4'}}/>
               <Row>
                   <Col className='about mt-4 '>
                  
                   <Image src={image} rounded style={{width:350, height:350}} className='iamge mx-auto' alt=''/>
                  

                   <div>
                   <p className='text-left' style={{color:'#ccd6f6'}}>Hi I'm Toufiqul Islam Anim. I'm a Junior web Developer Living In Dhaka, Bangladesh.I create Beautiful and Functional Websites <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut doloribus provident deserunt, dolores architecto officiis dolore officia quia! Harum suscipit, nobis in incidunt voluptatibus accusantium! Accusamus iste asperiores voluptatum.</p>
                   </div>

                   </Col>
               </Row>
               <div className="mt-5 ">
                   <h1 className="text-center fw-bold " style={{color:'#64ffd4'}}>Skills</h1>
                   <hr className='mb-5 mx-auto w-25 ' style={{color:'#64ffd4'}}/>

                   <div className="w-75 mx-auto">
                   <p style={{color:'#ccd6f6', marginBottom:8}}>HTML5 80%</p>

                    <ProgressBar  style={{backgroundColor:'lightBlue'}} now={80} className="mb-3"/>

                    <p style={{color:'#ccd6f6', marginBottom:8}}>CSS3 75%</p>

                    <ProgressBar style={{backgroundColor:'lightBlue'}} now={75} className="mb-3"/>
                    <p style={{color:'#ccd6f6', marginBottom:8}}>Bootstrap 85%</p>

                    <ProgressBar style={{backgroundColor:'lightBlue'}} now={85} className="mb-3"/>
                    <p style={{color:'#ccd6f6', marginBottom:8}}>Material Ui 50%</p>

                    <ProgressBar style={{backgroundColor:'lightBlue'}} now={75} className="mb-3"/>

                    <p style={{color:'#ccd6f6', marginBottom:8}}>Javascript 55%</p>

                    <ProgressBar style={{backgroundColor:'lightBlue'}} now={55} className="mb-3" />

                    <p style={{color:'#ccd6f6', marginBottom:8}}>React Js 60%</p>

                    <ProgressBar style={{backgroundColor:'lightBlue'}} now={60} className="mb-3" />

                    <p style={{color:'#ccd6f6', marginBottom:8}}>Node Js 45%</p>

                    <ProgressBar style={{backgroundColor:'lightBlue'}} now={45} className="mb-3"/>
        
                    <p style={{color:'#ccd6f6', marginBottom:8}}>MOngoDB 50%</p>

                    <ProgressBar style={{backgroundColor:'lightBlue'}} now={50} className="mb-3"/>
                   </div>
                </div>
            </Container> 
        </div>
    );
};

export default About;