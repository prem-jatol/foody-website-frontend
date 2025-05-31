import React from "react";
import { FaHourglassStart } from "react-icons/fa";

const FilterHeader = () => {

  return (
    <div className="mb-6 flex items-center gap-2 sticky top-0 left-0 bg-white z-999 border-2 border-red-600 h-[60px]">
      <button className="p-2 border border-gray-300 rounded-full ">
        Filter ic
      </button>
      <button className="p-2 border border-gray-300 rounded-full ">
        Filter ic
      </button>
    </div>
  );
};

export default FilterHeader;
