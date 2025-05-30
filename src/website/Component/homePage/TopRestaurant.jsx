import React from 'react';
import Slider from '../common/Slider';

const TopRestaurant = () => {
    const data = [
        {
            img: './img/product.avif',
            title: "The Good Bowl",
            rating: 4.4,
            timing: "24-30",
            subText: "American food ipsum dolor sit amet",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores maxime fugiat neque eos laudantium ab. Dolorem doloremque impedit, distinctio eveniet sunt, commodi ea nihil debitis non consequatur fugiat nostrum?"
        },
        {
            img: './img/product.avif',
            title: "The Good Bowl",
            rating: 4.4,
            timing: "24-30",
            subText: "American food ipsum dolor sit amet",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores maxime fugiat neque eos laudantium ab. Dolorem doloremque impedit, distinctio eveniet sunt, commodi ea nihil debitis non consequatur fugiat nostrum?"
        },
        {
            img: './img/product.avif',
            title: "The Good Bowl",
            rating: 4.4,
            timing: "24-30",
            subText: "American food ipsum dolor sit amet",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores maxime fugiat neque eos laudantium ab. Dolorem doloremque impedit, distinctio eveniet sunt, commodi ea nihil debitis non consequatur fugiat nostrum?"
        },
        {
            img: './img/product.avif',
            title: "The Good Bowl",
            rating: 4.4,
            timing: "24-30",
            subText: "American food ipsum dolor sit amet",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores maxime fugiat neque eos laudantium ab. Dolorem doloremque impedit, distinctio eveniet sunt, commodi ea nihil debitis non consequatur fugiat nostrum?"
        },
        {
            img: './img/product.avif',
            title: "The Good Bowl",
            rating: 4.4,
            timing: "24-30",
            subText: "American food ipsum dolor sit amet",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores maxime fugiat neque eos laudantium ab. Dolorem doloremque impedit, distinctio eveniet sunt, commodi ea nihil debitis non consequatur fugiat nostrum?"
        },
        {
            img: './img/product.avif',
            title: "The Good Bowl",
            rating: 4.4,
            timing: "24-30",
            subText: "American food ipsum dolor sit amet",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores maxime fugiat neque eos laudantium ab. Dolorem doloremque impedit, distinctio eveniet sunt, commodi ea nihil debitis non consequatur fugiat nostrum?"
        },
        {
            img: './img/product.avif',
            title: "The Good Bowl",
            rating: 4.4,
            timing: "24-30",
            subText: "American food ipsum dolor sit amet",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores maxime fugiat neque eos laudantium ab. Dolorem doloremque impedit, distinctio eveniet sunt, commodi ea nihil debitis non consequatur fugiat nostrum?"
        },
        
    ]
    return (
        <div>
            <h2>Top rastautorant</h2>
            <br />
            <Slider data = {data} topResto = {true}/>
        </div>
    );
}

export default TopRestaurant;
