import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './SameCategoryCard.css';

const SameCategoryCard = ({sameCategory}) => {
    const {name, title,photoURL,discription,_id} = sameCategory ;

    console.log(sameCategory,'new same category card ')
    return (
    <div className='mt-3'>
     <Card className='mt-4'>
      <Card.Header> <h4 > {title} </h4> </Card.Header>
      <Card.Body>
        <Image  className='same-category-image' src={photoURL} />
        <Card.Text>
          <h4 className='text-center my-3'>{name} </h4>
         {discription.length > 150 ?
          <h5> {discription.slice(0,150)+ '....'}
            <Link className=' text-decoration-none' to ={`/course-details/${_id}` }> Read More </Link>
             </h5>
            :
            <h5> {discription} </h5>
         }
        </Card.Text>
        <Button className='premium-btn' ><Link>   Get Premium </Link> </Button>
      </Card.Body>
    </Card>
    </div>
    );
};

export default SameCategoryCard;