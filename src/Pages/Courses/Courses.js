import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CourseCardSummary from '../CourseCardSummary/CourseCardSummary';
import './Courses.css';

const Courses = () => {
const {userInfo} = useContext(AuthContext);
const coursesData = useLoaderData();
console.log(coursesData)
    return (
        <div>
           <h3>  This is Courses {coursesData.length} </h3>  
           <div className='courses'>
           {
            coursesData.map(course => <CourseCardSummary key={course._id} course ={course} > </CourseCardSummary>)
           }
           </div>
          
          
        </div>
    );
};

export default Courses;