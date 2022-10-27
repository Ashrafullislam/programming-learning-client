import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import './SignUp.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
 const [error,setError] = useState(null);
 const {CreateUser} = useContext(AuthContext); 

const SignUpHandlar = (event) => {
  
    event.preventDefault();
    const form = event.target ;
    const name = form.fullName.value ;
    const email = form.email.value;
    const password = form.password.value ;
    const confirm = form.confirm.value; 
    console.log(name,email,password,confirm ,'Sign up info ')
    if(password !== confirm ){
       setError(`Password and Confirm password didn't match `)
       return ;
     
    }

    CreateUser(email,password) 
    .then(result => {
        const user = result.user ;
     
        toast.success('Congratulation !Sign Up successfull  ', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         setError(null)
         form.reset();
    })
    .catch(error => {
        const errorMessage = error.message ;
        setError(errorMessage); 
    })
}


  return (
    <div>
      <h2 className='text-center premium-text mt-3'> Please Sign Up Now </h2>
      <div className='form-style'>
        <Form onSubmit={SignUpHandlar} >
        <Form.Group className="mb-3 mt-4" >
            <Form.Label> Eneter Your Full Name </Form.Label>
            <Form.Control type="text" placeholder="Enter Full name" name='fullName' required />
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required  name='email'/>
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required name='password' />
          </Form.Group>
           
          <Form.Group className="mb-3" >
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" required  name='confirm'/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label> Upload Your Image </Form.Label>
            <Form.Control type="file" placeholder="Confirm Password"   name='file'/>
          </Form.Group>
           
           
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label=" Accept terms and condition " />
          </Form.Group>
          <p> Already have an account ? <span> <Link to={'/login'} > Log in here  </Link></span> </p> 
           {error && <p className='text-danger' > {error } </p> }
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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

export default SignUp;
