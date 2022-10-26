import React from 'react';
import { Button, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo-web.jpg';


const Header = () => { 
    return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  > <img className='logo' src={logo} alt='Logo' /> <span className='navbar-title'>  Programming Learning</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to='/courses' > Courses </ Link> 
          <Link to='/faq' > Faq         </ Link>
          <Link to='/blog' > Blog       </ Link>
         </Nav>

          <Nav>
           <Link to={'/login'} >  <Button variant='secondary ' className='reigster-btn' > Log in </Button> </Link>
         <Link to={'/signup'}> <Button variant='secondary'  className='reigster-btn' > Sign up </Button>
          </Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </div>
    );
};

export default Header;