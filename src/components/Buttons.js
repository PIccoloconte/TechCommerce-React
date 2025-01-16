import React from "react";

const ShopNow = (props) => {
  const { mbValue, color } = props;

  return (
    <button
      className={`px-14 py-4 mb-${mbValue} border border-${color} rounded-md text-${color}`}
    >
      Shop Now
    </button>
  );
};

export { ShopNow };
