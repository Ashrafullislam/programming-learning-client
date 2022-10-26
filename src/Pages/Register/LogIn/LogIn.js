import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaGoogle, FaSignInAlt} from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
    const {LogInHandlar, LogInGoogle ,LogInGithub} = useContext(AuthContext);
    const [error,setError] = useState(null);
    const googleProvider = new GoogleAuthProvider ();
    const githubProvider = new GithubAuthProvider ();

 // sign up with email and password    
 const SignInHandlar = (event) => {
    event.preventDefault();
    const form  = event.target ;
    const email = form.email.value ;
    const password = form.password.value ;
    console.log(email,password,'log in info ')
    LogInHandlar(email,password)

    .then(result => {
         const user = result.user ;
         toast.success(' Succesfully Log in ', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    })

    .catch(error => {
        const errorMessage = error.message ;
        setError(errorMessage)
    })
 }

 // log in with google  
 const LogInWithGoogle = () => {
    LogInGoogle(googleProvider) 

 }
 // log in with github 
 const LogInWithGithub = () => {
    LogInGithub(githubProvider)
 }

    return (
        <div>
            <h2 className='text-center premium-text mt-3'> Log in Now </h2>
            <div className='form-style'>
         <Form onSubmit={SignInHandlar} >
        
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required  name='email'/>
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required name='password' />
          </Form.Group>
        
          <p>You  have no account ? <span> <Link to={'/signup'} > Sign up here  </Link></span> </p> 
           {error  && <p className='text-danger '> {error} </p>}        
           <p> <Link> Forgot password ? </Link> </p>
            <Button onClick={LogInWithGoogle} className='bg-secondary me-2 mb-3'  > <FaGoogle /> Log in with google  </Button>
            <Button onClick={LogInWithGithub} className='bg-secondary me-2 mb-3' > <FaGithub  /> Log in with github </Button>

          <Button variant="primary" className='d-block px-5' type="submit">
            Log in <FaSignInAlt />
          </Button>
        </Form>
      </div>
      <ToastContainer
        position="top-center"
         autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
         pauseOnHover
        theme="light"
      />
    </div>
    );
};

export default LogIn;