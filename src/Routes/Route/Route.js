import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Blog from '../../Pages/Blog/Blog';
import Courses from '../../Pages/Courses/Courses';
import Faq from '../../Pages/Faq/Faq';


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