import React from "react";
import PlayStation from "../assets/img/PlayStation.png";
import { CiHeart } from "react-icons/ci";

const CardProductsPlaceholder = () => {
  return (
    <div className="relative px-3 pb-6 rounded-lg bg-product_bg pt-14">
      <div className="text-center">
        <img
          src={PlayStation}
          className="mx-auto mb-2 w-28 h-28 lg:mb-4"
          alt="Play"
        ></img>
        <h4 className="mb-4 text-lg font-medium leading-6 lg:font-normal line-clamp-2 ">
          Apple iphone 14 pro max 128gb display oled 4k
        </h4>
        <h2 className="mb-4 text-2xl font-semibold xl:mb-6">$900</h2>
        <button className="w-full py-3 text-white bg-black rounded-lg">
          Buy Now
        </button>
      </div>
      <div className="absolute top-4 right-3 text-[32px]">
        <CiHeart></CiHeart>
      </div>
    </div>
  );
};

export default CardProductsPlaceholder;
