import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const FoodCategory = ({ itemWidth = 320, gap = 20 }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const foodCartArray = [
    {
      name: "North India",
      img : "./img/north-indian.avif"
    },
    {
      name: "Pizza",
      img : "./img/north-indian.avif"
    },
    {
      name: "Burgers",
      img : "./img/north-indian.avif"
    },
    {
      name: "Briyani",
      img : "./img/north-indian.avif"
    },
    {
      name: "Rolls",
      img : "./img/north-indian.avif"
    },
    {
      name: "Ice-cream",
      img : "./img/north-indian.avif"
    },
    {
      name: "Burgers",
      img : "./img/north-indian.avif"
    },
    {
      name: "Briyani",
      img : "./img/north-indian.avif"
    },
    {
      name: "Rolls",
      img : "./img/north-indian.avif"
    },
    {
      name: "Ice-cream",
      img : "./img/north-indian.avif"
    },
  ];

  const totalItemWidth = itemWidth + gap;
  const totalWidth = foodCartArray.length * totalItemWidth;

  const nextNow = () => {
    setScrollPosition((prevPosition) => {
      let newPosition = prevPosition + totalItemWidth;
      if (prevPosition >= totalWidth - totalItemWidth * 3) {
        return (newPosition = 0);
      }
      return newPosition;
    });
  };

  const prevNow = () => {
    if (scrollPosition > 0) {
      setScrollPosition((prevPosition) => {
        let newPosition = prevPosition - totalItemWidth;
        return newPosition;
      });
    }
  };
//   margin : 0px auto;
  return (
    <section className="w-[1100px] mx-auto my-10">
        <div className="flex justify-between">
          <div>
            <h2 className="mr-4 inline-block w-fit text-3xl font-semibold">
              Get Best <span className="text-gray-600">Services</span>
            </h2>
            <span className="font-semibold">See All</span>
          </div>
          <div className="flex items-center gap-3">
            {scrollPosition !== 0 ? (
              <div
                onClick={prevNow}
                className="cursor-pointer rounded-full border bg-gray-600 p-2"
              >
                <FaAngleLeft fontSize="25px" />
              </div>
            ) : (
              ""
            )}
            <div
              onClick={nextNow}
              className="cursor-pointer rounded-full border bg-gray-600 p-2"
            >
              <FaAngleRight fontSize="25px" />
            </div>
          </div>
        </div>
        <div className={`mt-5 overflow-hidden`}>
          <div
            className="flex gap-5 transition-transform duration-200 ease-linear"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {foodCartArray.map(
                (item, index)=>{
                    return (
                        <div key={index} className="shrink-0">
                            <img src={item.img} alt="" width={150}/>
                            <div>{item.name}</div>
                        </div>
                    )
                }
            )}
          </div>
        </div>
    </section>
  );
};

export default FoodCategory;
