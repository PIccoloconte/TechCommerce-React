import React from "react";
import { useNavigate } from "react-router-dom";

const ShopNow = (props) => {
  const navigate = useNavigate();
  const { mbValue, color, ProductID } = props;

  return (
    <button
      onClick={() => navigate(`/Product/${ProductID}`)}
      className={`px-14 py-4 mb-${mbValue} border border-${color} rounded-md text-${color}`}
    >
      Shop Now
    </button>
  );
};

export { ShopNow };
