import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/SharedPage/FooterPart/Footer';
import Header from '../../Pages/SharedPage/Header/Header';
import LeftSideNav from '../../Pages/SharedPage/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
         <Header > </Header>
         <Container>
          <Row> 
            <Col lg= '3' className='d-none d-lg-block mt-2' > 
      
           <LeftSideNav > </LeftSideNav>
          
            </Col>
            <Col lg= '9'> 
              <Outlet> </Outlet>
            </Col>
          </Row>
         </Container>
         <Footer> </Footer>
      
        </div>
    );
};

export default Main;