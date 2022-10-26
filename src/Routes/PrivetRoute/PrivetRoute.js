import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location  = useLocation()
    const {user,loading} = useContext(AuthContext);
    if(loading) {
        <div> Loading.... </div> 
    }
    if(user && user.uid){
        return children ;
    }

    return <Navigate to="/login" state={{ from: location }} replace />; 

    
};

export default PrivetRoute;