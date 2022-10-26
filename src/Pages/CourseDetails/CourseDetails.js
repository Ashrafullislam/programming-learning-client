import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import './CourseDetails.css';
const CourseDetails = () => {
    const course = useLoaderData()
    const {name,title,discription ,photoURL,_id,category_id} = course ;
    console.log(course)
    
    return (
        <div>
        <h3 className='text-center mt-3 text-secondary'> Details of This  Course   </h3>
        <div className = 'single-card'>
         <Card className="text-center">
           <Card.Header>  <h4> {title} </h4> </Card.Header>
            <Card.Body>
                <Image className='single-course-img'  src= {photoURL} />
                <Card.Text>
                  <h3 className='text-center mt-2'> {name} </h3>
                 <h6 className='discription-text'> {discription} </h6>
                </Card.Text>
                <Button variant="primary"> <Link className='text-light text-decoration-none' 
                 to={`/category/${category_id}`}>   Get Same Category </Link> </Button>
              
                 <Button className='premium-btn ms-3'> <Link to ={`/course-premium/${_id}`} > Get Premium</Link>  </Button>
            </Card.Body>
            <Card.Footer className="text-muted"> <b>  {name} </b> </Card.Footer>
          </Card>

        </div>
        </div>

    );
};

export default CourseDetails;