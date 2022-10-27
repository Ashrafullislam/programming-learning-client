import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SameCategoryCard from '../SameCategoryCard/SameCategoryCard';

const SameCategory = () => {
    const sameCategories = useLoaderData()
    return (
        <div>
            <h3 className='mt-4'> Same Category Course {sameCategories.length} </h3>
             {
                sameCategories.map(sameCategory => < SameCategoryCard key={sameCategory.id} 
                    sameCategory = {sameCategory} 
                     > </SameCategoryCard>)
             }
        </div>
    );
};

export default SameCategory;