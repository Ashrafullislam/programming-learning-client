import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Blog from '../../Pages/Blog/Blog';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses';
import Faq from '../../Pages/Faq/Faq';
import SameCategory from '../../Pages/SameCategoryCourse/SameCategory';


const Route = () => {
const router = createBrowserRouter([
    {path: '/' , element: <Main > </Main>, children:[
     {
        path: '/',
        
        element: <Courses > </Courses>
    }, 

    {
        path: 'courses', 
        loader() {
          return fetch('http://localhost:5000/courses-data')
        },
        element: <Courses > </Courses>
    }, 
    {
      path:'/course-details/:id', 
      loader({params}) {
         return fetch(`http://localhost:5000/course-details/${params.id}`)
      },
      element:<CourseDetails> </CourseDetails>
    },
    {
       path:'/category/:id', 
       loader:({params})=> fetch(`http://localhost:5000/category-course/${params.id}`),
       element: <SameCategory> </SameCategory>
    },
    {
        path: 'faq', element: <Faq > </Faq>
    }, 
    {
        path: 'blog', element: <Blog > </Blog>
    }, 
    {
        path:'*' , element:  <div> Route not found </div>
    }
 ] }
])    
    return (
        <div>
            <RouterProvider router = {router}> </RouterProvider>
            
        </div>
    );
};

export default Route;