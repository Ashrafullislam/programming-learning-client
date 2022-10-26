import React from 'react';
import {Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useLoaderData} from 'react-router-dom';
import './PremiumPage.css';
import { FaBeer ,FaCheckCircle} from 'react-icons/fa';


const PremiumPage = () => {
  const premiumCourse = useLoaderData ();
  const {name, title, discription, photoURL, price} = premiumCourse;
  console.log (premiumCourse.name, 'premium ');
  return (
    <div>
      <h3 className='text-center my-3'> Premium Page </h3>
      <div>
        <Card className="text-center premium-card">
          <Card.Header> <h3> {title} </h3> </Card.Header>
          <Card.Body>
            <Card.Text>
              <Image className="single-course-img" src={photoURL} />
              <h3 className='premium-text'> {name} </h3>
              <h5 className="text-center premium-text my-3"> {discription.slice(0,200)} </h5>
              <h2 className=" premium-text"> Price: <span className='price'> ${price} </span>  </h2>

            </Card.Text>
            <Button  className='premium-btn'> Check Out <FaCheckCircle /> </Button>
          </Card.Body>
          <Card.Footer className="text-muted"> {name} </Card.Footer>
        </Card>
      </div>

    </div>
  );
};

export default PremiumPage;
