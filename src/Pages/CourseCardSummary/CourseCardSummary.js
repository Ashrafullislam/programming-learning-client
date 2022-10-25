import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseCardSummary.css';
import CardGroup from 'react-bootstrap/CardGroup';


const CourseCardSummary = ({course}) => {
    const {name,title,_id,photoURL,discription} = course;
    return (
        <div className='course'>
  <Card className="text-center mt-5 w-100">
      <Card.Header> <h4> {title}</h4>   </Card.Header>
      <Card.Body>
        <Card.Title> </Card.Title>
        <Image className='course-img' rounded src={photoURL} />
        <Card.Text>
            <p className=' mt-3'> <span className='card-text'>  {discription.slice(0,150)}  </span></p>
        </Card.Text>
        <Button variant="primary"> See more </Button>
      </Card.Body>
      <Card.Footer className="text-muted"> <b>  {name}</b> </Card.Footer>
    </Card>
        </div>
   
   

    
    );
};

export default CourseCardSummary;