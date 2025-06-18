import React, { useState } from "react";
import axios from "axios";

const Products = () => {
  const [formData, setFormData] = useState({
    title: "",
    timeframe: "",
    subText: "",
    discount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formDatas = new FormData();

    // formDatas.append("title", e.target.title.value);
    // formDatas.append("timeframe", e.target.timeframe.value);
    // formDatas.append("subtext", e.target.subtext.vlaue);
    // formDatas.append("discount", e.target.discount.value);
    // formDatas.append("title", formData.title);
    // formDatas.append("image", e.target.image.files[0]);
    // console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/product/add-product",
        formData
      );
      if (response.data.status === 1) {
        alert("product added!");
        console.log("Data saved:", response.data);
      }
    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product title"
          />
        </div>

        <input name = "image" type="file" />

        {/* Timeframe */}
        <div>
          <label className="block mb-1 font-medium">Timeframe</label>
          <input
            type="text"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Delivery Time (eg. 3-5 Days)"
          />
        </div>

        {/* Sub Text */}
        <div>
          <label className="block mb-1 font-medium">Sub Text</label>
          <input
            type="text"
            name="subText"
            value={formData.subText}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Short description about product"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block mb-1 font-medium">Discount</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="eg. 20%"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Products;
