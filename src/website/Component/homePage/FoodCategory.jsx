import Slider from "../common/Slider";

const FoodCategory = () => {
  const categoryArray = [
    {categoryName: "Category 1", img: "./img/north-indian.avif"},
    {categoryName: "Category 2", img: "./img/north-indian.avif"},
    {categoryName: "Category 3", img: "./img/north-indian.avif"},
    {categoryName: "Category 4", img: "./img/north-indian.avif"},
    {categoryName: "Category 5", img: "./img/north-indian.avif"},
    {categoryName: "Category 6", img: "./img/north-indian.avif"},
    {categoryName: "Category 7", img: "./img/north-indian.avif"},
    {categoryName: "Category 8", img: "./img/north-indian.avif"},
    {categoryName: "Category 9", img: "./img/north-indian.avif"},
    {categoryName: "Category 10", img: "./img/north-indian.avif"},
    {categoryName: "Category 11", img: "./img/north-indian.avif"},
    {categoryName: "Category 12", img: "./img/north-indian.avif"},
    {categoryName: "Category 13", img: "./img/north-indian.avif"},
    {categoryName: "Category 14", img: "./img/north-indian.avif"},
    {categoryName: "Category 15", img: "./img/north-indian.avif"}
]
 
  return (
    <>
     <Slider data = {categoryArray}/>
    </>
  );
};

export default FoodCategory;
