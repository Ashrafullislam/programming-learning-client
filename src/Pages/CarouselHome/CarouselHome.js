import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../Images/slider-1.jpg';
import slider2 from '../../Images/slider-2.jpg';
import slider3 from '../../Images/slider-3.jpg';
import slider4 from '../../Images/slider-4.jpg';
import './CarouselHome.css';
function CarouselHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='slider-1'>
        <img
          className="d-block w-100"
          src= {slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Learn We Design basic and Advance  </h3>
          <p> You can learn web design and also learn dynamic web design from here </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> Learn Web Development   </h3>
          <p> Learn frontend and backend Web Development  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> Digital Marketing </h3>
          <p>
            Digital Marketing ,SEO ,Graphics Design ,Social Media Marketing   
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome ;