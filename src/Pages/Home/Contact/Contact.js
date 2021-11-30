import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { GoLocation,GoDeviceMobile } from "react-icons/go";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cei0qjh', 'template_epmpmac', e.target, 'user_wEZRSPhXH4ZHOMDtkyb5A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <div className='container mt-5' id='contact'>
             <Row>
                 <Col xs={12} sm={8}>
               
             <Form onSubmit={sendEmail} style={{backgroundColor:'#112240'}} className='p-5 shadow'>
             <h1 style={{color:'#ccd6f6'}}>Send Your Message</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label ></Form.Label>
                    <Form.Control type="text" placeholder="Your Name" className="border-0 rounded py-3 shadow" name='name' />
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Your Email" className="border-0 rounded py-3 shadow" name='email'/>
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="subject" className="border-0 rounded py-3 shadow" name='subject'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="message" className="border-0 rounded" name='message'/>
                </Form.Group>
                <Button style={{border:'1px solid #64ffda', color:'#64ffda' ,backgroundColor:'#112240'}} type="submit" className='px-5 py-3'>Send</Button>
                </Form>
               
                 </Col>
                 <Col xs={12} sm={4}  style={{backgroundColor:'#112240'}} >
                     <div className='p-3 my-auto' style={{color:'#ccd6f6'}}>
                        <h3>Feel Free To Contact Me</h3>
                        <p><GoLocation/>Dhaka, Bangladesh</p>
                        <p><GoDeviceMobile/>+8801839779976</p>
                        <p><MdEmail/>toufiq034@gmail.com</p>
                     </div>
                 </Col>
             </Row>
        </div>
    );
};

export default Contact;