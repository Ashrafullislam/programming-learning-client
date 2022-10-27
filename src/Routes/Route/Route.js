import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Blog from '../../Pages/Blog/Blog';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses';
import Faq from '../../Pages/Faq/Faq';
import Home from '../../Pages/Home/Home';
import PremiumPage from '../../Pages/PremiumPage/PremiumPage';
import LogIn from '../../Pages/Register/LogIn/LogIn';
import SignUp from '../../Pages/Register/SignUp/SignUp';
import SameCategory from '../../Pages/SameCategoryCourse/SameCategory';
import PrivetRoute from '../PrivetRoute/PrivetRoute';


const Route = () => {
const router = createBrowserRouter([
    {path: '/' , element: <Main > </Main>, children:[
   
        {
            path: '/', 
          
            element: <Home> </Home>
        }, 
        {
          path: '/home',
          element: <Home>  </Home>
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
         return fetch(`http://localhost:5000/course-details/${params.id}` )
      },
      element:<CourseDetails> </CourseDetails>
    },
     {
       path:'/course-premium/:id', 
       loader ({params}) {
        return fetch(`http://localhost:5000/course-details/${params.id}` )
       },
      element:  <PrivetRoute > <PremiumPage > </PremiumPage> </PrivetRoute>
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
        path: 'signup' , element: <SignUp > </SignUp>
    },
    {
       path: 'login' , element: <LogIn > </LogIn>
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