import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="6">
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

          <Col lg="6" />
        </Row>
      </Container>

    </div>
  );
};

export default Footer;
