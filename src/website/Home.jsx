import React from 'react';
import FoodCategory from './Component/homePage/FoodCategory';
import TopRestaurant from './Component/homePage/TopRestaurant';
import JaipurFood from './Component/homePage/JaipurFood';

const Home = () => {
    
    return (
        <>
            <FoodCategory />
            <hr className='my-10 text-gray-300'/>
            
            <TopRestaurant />
             <hr className='my-10 text-gray-300'/>
            <JaipurFood />
        </>
    );
}

export default Home;
