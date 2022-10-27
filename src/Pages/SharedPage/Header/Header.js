import React, { useContext ,useState } from 'react';
import { Button, Image  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../Images/web-coding-logo.jpg'
import './Header.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
// profile modal 
import Modal from 'react-bootstrap/Modal';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => { 
  const {user ,LogOut} = useContext(AuthContext);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  console.log(user)

    return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand  > <img className='logo' src={logo} alt='Logo' /> <span className='navbar-title'>  Programming Learning</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link to = '/home'>  Home  </Link>  
          <Link to='/courses' > Courses </ Link> 
          <Link to='/faq' > Faq   </ Link>
          <Link to='/blog' > Blog  </ Link>
           <div className='d-lg-none text-center'>
            <LeftSideNav>  </LeftSideNav>
           </div>
         </Nav>
          <Nav>

            {user?
              <>
                 <Button variant='secondary'  onClick={LogOut} className='reigster-btn' > Log Out </Button>
                 {user?.photoURL?
                   <Image  onClick={() => setSmShow(true)} className='user-img' src= {user?.photoURL}
                   Title= {user.displayName}   />
                   :
                   <FaUser  onClick={() => setSmShow(true)} className='user-icon text-light' />
                 }
               </>
                  :
                <>
               <Link to={'/login'} >  <Button variant='secondary'  className='reigster-btn' > Log in </Button> </Link>
               <Link to={'/signup'}> <Button variant='secondary'  className='reigster-btn' > Sign up </Button>
              </Link> 
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {
        // profile open modal 
      }

      <div>
      <Modal
        size="md" className='modal'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
         >
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
           { user?
           <>
            <Image className='user-profile-photo' src={user?.photoURL} />
           <h3> {user?.displayName} </h3>
           <h4> {user?.email} </h4>
           </>
           
            :
            <h3> {'Profile'} </h3>
          }
         
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
     
      </div>
   </div>
    );
};

export default Header;