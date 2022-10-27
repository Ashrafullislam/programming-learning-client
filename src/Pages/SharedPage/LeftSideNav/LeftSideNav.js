import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';
const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=> {
     fetch('http://localhost:5000/category-data')
     .then(res => res.json())
      .then(data => setCategories(data))
    },[])

    return (
        <div className='category'>
            <h3 className='d-none  d-lg-block '> All Category : {categories.length} </h3>
            {
                categories.map(category => <p className='category-list' key={category._id} >
                 <Link  to={`/category/${category.id}`}> 
                {category.name} 
                </Link>  </p> ) 
            }
        </div>
    );
};

export default LeftSideNav; 