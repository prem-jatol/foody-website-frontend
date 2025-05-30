import React from 'react';
import FoodCategory from './Component/homePage/FoodCategory';
import TopRestaurant from './Component/homePage/TopRestaurant';

const Home = () => {
    
    return (
        <>
            <FoodCategory />
            <hr className='my-10 text-gray-300'/>
            
            <TopRestaurant />
        </>
    );
}

export default Home;
