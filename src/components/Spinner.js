import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 w-16 h-16 border-2 border-gray-200 border-dashed rounded-full"></div>

        {/* Inner Ring  */}
        <div className="absolute inset-0 w-16 h-16 border-2 border-blue-500 border-dashed rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Spinner;
