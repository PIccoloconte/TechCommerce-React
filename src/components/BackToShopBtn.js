import React from "react";
import { Link } from "react-router-dom";

const BackToShopBtn = () => {
  return (
    <Link
      to="/"
      className="py-4 text-black border border-black rounded-md px-14"
    >
      Return to store
    </Link>
  );
};

export default BackToShopBtn;
