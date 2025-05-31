import React, { useState } from "react";
import FoodBox from "./FoodBox";

const Slider = ({ data, topResto }) => {
  const [boxPosition, setBoxPosition] = useState(0);

  const totalBoxWidth = topResto ? 312 : 212;
  const totalParentWidth = data.length * 212;
  console.log(totalParentWidth);

  const nextSlide = () => {
    setBoxPosition((prev) => {
      return prev + totalBoxWidth;
    });
    if (boxPosition > totalParentWidth - 900) {
      setBoxPosition(0);
    }
  };
  const prevSlide = () => {
    setBoxPosition((prev) => {
      return prev - totalBoxWidth;
    });
    if (boxPosition < 0) {
      setBoxPosition(0);
    }
  };
  return (
    <div>
      <div className="flex justify-between my-10">
        <h2>What's in your mind</h2>
        <div>
          <button
            onClick={prevSlide}
            className="border p-2 rounded cursor-pointer mr-2"
          >
            prev
          </button>
          <button
            onClick={nextSlide}
            className="border p-2 rounded cursor-pointer"
          >
            next
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className={`flex transform gap-3 duration-1000`}
          style={{ transform: `translateX(-${boxPosition}px)` }}
        >
          {data.map((data, indx) => {
            return topResto === true ? (
              <>
                <FoodBox key={indx} img={data.img} title={data.title} timing = {data.timing} rating={data.rating} subText={data.subText} />
              </>
            ) : (
              <div key={indx} className="w-[200px] border shrink-0">
                <img src={data.img} alt="" />
                <p>{data.categoryName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
