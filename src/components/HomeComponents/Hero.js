import React from "react";
// import Iphone from "../assets/img/Iphone.png";
import Iphone from "../../assets/img/Iphone.png";
import { ShopNow } from "../Buttons";

const Hero = () => {
  return (
    <div className="text-center h-[770px] pt-20 px-4 bg-[#211C24] overflow-hidden lg:flex lg:h-[632px] lg:justify-between lg:px-40 lg:text-start gap-4">
      <div>
        <h4 className="mb-4 text-2xl font-semibold text-secondary">
          Pro.Beyond.
        </h4>
        <h1 className="font-thin text-7xl text-[#FAFAFA]">IPhone 13</h1>
        <h1 className="mb-4 font-bold text-7xl text-[#FAFAFA]">Pro</h1>
        <p className="mb-8 text-xl text-secondary">
          Created to change everything for the better. For everyone
        </p>
        <ShopNow mbValue={12} color={"white"} ProductID={123}></ShopNow>
      </div>
      <img className="m-auto -translate-y-14 " src={Iphone} alt="iphone"></img>
    </div>
  );
};

export default Hero;
