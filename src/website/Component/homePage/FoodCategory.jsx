import React, { useState } from "react";

const FoodCategory = () => {
  const [boxPosition, setBoxPosition] = useState(0);
  // const [stop, setStop] = useState(false);

  const totalBoxWidth = 212;
  const totalParentWidth = 8*212;

  console.log(totalParentWidth)

  const nextSlide = () =>{
    setBoxPosition((prev)=>{
      return prev + totalBoxWidth;
    })
    if(boxPosition > (totalParentWidth-900)){
      setBoxPosition(0)
    }
  }
  console.log(boxPosition)
  const prevSlide = () =>{
    setBoxPosition((prev)=>{
      return prev - totalBoxWidth;
    })
    if(boxPosition < 0){
      setBoxPosition(0)
    }
  }
  return (
    <>
      <div>
        <div className="flex justify-between my-10">
          <h2>What's in your mind</h2>
          <div>
            <button onClick={prevSlide} className="border p-2 rounded cursor-pointer mr-2">prev</button>
            <button onClick={nextSlide} className="border p-2 rounded cursor-pointer">next</button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className={`flex transform gap-3 duration-1000`} style={{transform : `translateX(-${boxPosition}px)`}}>
            <div className="w-[200px] border shrink-0">
              <img src="./img/north-indian.avif" alt="" />
              <p>North indian</p>
            </div>
            <div className="w-[200px] border shrink-0">
              <img src="./img/north-indian.avif" alt="" />
              <p>North indian</p>
            </div>
            <div className="w-[200px] border shrink-0">
              <img src="./img/north-indian.avif" alt="" />
              <p>North indian</p>
            </div>
            <div className="w-[200px] border shrink-0">
              <img src="./img/north-indian.avif" alt="" />
              <p>North indian</p>
            </div>
            <div className="w-[200px] border shrink-0">
              <img src="./img/north-indian.avif" alt="" />
              <p>North indian</p>
            </div>
            <div className="w-[200px] border shrink-0">
              <img src="./img/north-indian.avif" alt="" />
              <p>North indian</p>
            </div>
            <div className="w-[200px] border shrink-0">
              <img src="./img/north-indian.avif" alt="" />
              <p>North indian</p>
            </div>
            <div className="w-[200px] border shrink-0">
              <img src="./img/north-indian.avif" alt="" />
              <p>North indian</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCategory;
