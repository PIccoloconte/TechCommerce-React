import React from "react";
import Iphone from "../assets/img/Iphone.png";
import { ShopNow } from "./Buttons";
const Hero = () => {
  return (
    <div className="text-center h-[770px] pt-20 px-4 bg-[#211C24] overflow-hidden lg:flex lg:h-[632px] lg:justify-between lg:px-40 lg:text-start gap-4">
      <div>
        <h4 className="text-2xl mb-4 text-[#909090] font-semibold">
          Pro.Beyond.
        </h4>
        <h1 className="font-thin text-7xl text-primary">IPhone 13</h1>
        <h1 className="mb-4 font-bold text-7xl text-primary">Pro</h1>
        <p className="text-xl mb-8 text-[#909090]">
          Created to change everything for the better. For everyone
        </p>
        <ShopNow mbValue={12} color={"white"}></ShopNow>
      </div>
      <img className="m-auto -translate-y-14 " src={Iphone} alt="iphone"></img>
    </div>
  );
};

export default Hero;
