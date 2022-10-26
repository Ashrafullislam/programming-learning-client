import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CourseCardSummary from '../CourseCardSummary/CourseCardSummary';
import './Courses.css';

const Courses = () => {
const {userInfo} = useContext(AuthContext);
const coursesData = useLoaderData();
    return (
        <div>
           <h3 className='text-center mt-3'>  Total Courses : {coursesData.length} </h3>  
           <div className='courses'>
           {
            coursesData.map(course => <CourseCardSummary key={course._id} course ={course} > </CourseCardSummary>)
           }
           </div>
          
          
        </div>
    );
};

export default Courses;