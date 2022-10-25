import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {
  const {userInfo} = useContext(AuthContext);
    return (
        <div>
          <h3> This is our home </h3>  
        
        </div>
    );
};

export default Home;