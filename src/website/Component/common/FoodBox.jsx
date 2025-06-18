import React from "react";
import { FaStar } from "react-icons/fa";

const FoodBox = ({img, title, rating, timing, subText, boxSize}) => {
  
  return (
    <div className={`border shrink-0 rounded-lg transform hover:scale-90 duration-100 mb-4`} style={{width : boxSize ? `${boxSize}px` : '300px'}}> 
      {/* <img src=`http://localhost:3000/${img}` alt="" className="w-full h-[200px] rounded-lg" /> */}
    
      <img src={img} alt="" className="w-full h-[200px] rounded-lg" />
      <div>{title}</div>
      <div className="flex gap-2">
        <FaStar /> <span>{rating}</span>
        <span>{timing}min</span>
      </div>
      <p className="text-gray-600">{subText}</p>
    </div>
  );
};

export default FoodBox;
