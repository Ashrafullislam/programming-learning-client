import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CarouselHome from '../CarouselHome/CarouselHome';

const Home = () => {
  const {userInfo} = useContext(AuthContext);
    return (
        <div>
            <h2 className='text-center mt-3 premium-text'>  Wellcome to our Programming Learning  </h2>
            <CarouselHome > </CarouselHome>  
        
        </div>
    );
};

export default Home;