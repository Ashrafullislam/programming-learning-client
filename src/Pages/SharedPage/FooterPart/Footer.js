import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Footer.css';

import { BiEnvelope,  } from "react-icons/bi";
import {  FaCopyright, FaFacebook, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <Container className='py-5'>
        <Row >
         
        <Col lg="4" >
             <p className='footer-text'> <FaCopyright />  Copyright Warning </p>
             <p className='footer-text'> <BiEnvelope /> email: ashrafull6252@gamil.com </p>
             <p className='footer-text'> <FaLocationArrow  /> Address: Sylhet ,Banglades </p>
             <p className='footer-text'> All rights reserved by Ashrafull  </p>
              
           </Col>

          <Col lg="4">
            <div className="footer-option">
              <div>
                <Link> Home </Link>
              </div>

              <div>
                <Link> Courses </Link>
              </div>

              <div>
                <Link> Faq </Link>
              </div>

              <div>
                <Link> Blog </Link>
              </div>
            </div>
          </Col>

          
            <Col lg="4" >
                <h5 className='text-light social-icon'> <FaPhone /> Contact us  </h5>
                <p className='social-icon'> <Link> <FaFacebook /> Facebook </Link> </p>
                <p className='social-icon'> <Link> <FaTwitter /> Twitter </Link> </p>
                <p className='social-icon'> <Link> <FaLinkedin /> Linkedin </Link> </p>

           </Col>
           
            </Row>
        </Container>

    </div>
  );
};

export default Footer;
