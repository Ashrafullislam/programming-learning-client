import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location  = useLocation()
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return   <Spinner animation="border" variant="primary" />
    }
  
    if(!user){
        return <Navigate to= '/login' state={{ from: location }} replace > </Navigate>

    }
    return children ;

};

export default PrivetRoute;