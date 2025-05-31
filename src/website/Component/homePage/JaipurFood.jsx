import React from "react";
import FoodBox from "../common/FoodBox";
import FilterHeader from "../common/FilterHeader";

const JaipurFood = () => {
  const products = [
    {
      img: "./img/product2.avif",
      title: "KFC",
      rating: 4.3,
      timing: "3-5",
      subtex: "Chinese, Asian, Tibetan, Dessert's Vivek Vihar",
    },
    {
      img: "./img/product2.avif",
      title: "Burger King",
      rating: 4.1,
      timing: "2-4",
      subtex: "Burgers, American, Fast Food, Karol Bagh",
    },
    {
      img: "./img/product2.avif",
      title: "Domino's Pizza",
      rating: 4.5,
      timing: "3-6",
      subtex: "Pizza, Italian, Fast Food, Lajpat Nagar",
    },
    {
      img: "./img/product2.avif",
      title: "Subway",
      rating: 4.0,
      timing: "4-7",
      subtex: "Healthy, Sandwiches, Beverages, Rajouri Garden",
    },
    {
      img: "./img/product2.avif",
      title: "Pizza Hut",
      rating: 4.2,
      timing: "3-5",
      subtex: "Pizza, Italian, Beverages, Preet Vihar",
    },
    {
      img: "./img/product2.avif",
      title: "McDonald's",
      rating: 4.4,
      timing: "2-5",
      subtex: "Burgers, Fast Food, Connaught Place",
    },
    {
      img: "./img/product2.avif",
      title: "Haldiram's",
      rating: 4.6,
      timing: "3-6",
      subtex: "North Indian, South Indian, Sweets, Chandni Chowk",
    },
    {
      img: "./img/product2.avif",
      title: "Barbeque Nation",
      rating: 4.3,
      timing: "5-8",
      subtex: "Buffet, BBQ, North Indian, Noida Sector 18",
    },
    {
      img: "./img/product2.avif",
      title: "Biryani Blues",
      rating: 4.0,
      timing: "3-5",
      subtex: "Hyderabadi Biryani, Mughlai, Sector 15 Gurgaon",
    },
    {
      img: "./img/product2.avif",
      title: "Behrouz Biryani",
      rating: 4.5,
      timing: "4-7",
      subtex: "Biryani, Kebabs, Beverages, South Delhi",
    },
    {
      img: "./img/product2.avif",
      title: "The Belgian Waffle Co.",
      rating: 4.2,
      timing: "3-6",
      subtex: "Waffles, Desserts, Shakes, Kamla Nagar",
    },
    {
      img: "./img/product2.avif",
      title: "Wow! Momo",
      rating: 4.1,
      timing: "2-4",
      subtex: "Momos, Chinese, Tibetan, Saket",
    },
    {
      img: "./img/product2.avif",
      title: "Faasos",
      rating: 4.3,
      timing: "3-5",
      subtex: "Rolls, Wraps, North Indian, Laxmi Nagar",
    },
    {
      img: "./img/product2.avif",
      title: "Cafe Coffee Day",
      rating: 4.0,
      timing: "5-7",
      subtex: "Coffee, Beverages, Snacks, CP",
    },
    {
      img: "./img/product2.avif",
      title: "Nando's",
      rating: 4.4,
      timing: "4-6",
      subtex: "Peri-Peri Chicken, Burgers, DLF Mall",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl mb-6 font-bold">This jaipur food section</h2>
      <FilterHeader />
      <div className="flex justify-between flex-wrap">
        {products.map(
            (product, indx)=>{  
                return  <FoodBox key={indx} boxSize={280} img={product.img} title={product.title} rating={product.rating} timing={product.timing} subText={product.subtex} />
            }
        )}
       
      </div>
    </div>
  );
};

export default JaipurFood;
