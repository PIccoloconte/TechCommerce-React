import React from "react";
import { BsCpu } from "react-icons/bs";
import { PiStorefront } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";

const DeliveryStuff = () => {
  return (
    <>
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center justify-center bg-product_bg w-14 h-14 rounded-xl">
          <BsCpu className="w-6 h-6 text-[#797979]"></BsCpu>
        </div>
        <div className="text-center">
          <p className="text-secondary">Free delivery</p>
          <p>1-2 day</p>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center justify-center bg-product_bg w-14 h-14 rounded-xl">
          <PiStorefront className="w-6 h-6 text-[#797979]"></PiStorefront>
        </div>
        <div className="text-center">
          <p className="text-secondary">In Stock</p>
          <p>Today</p>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center justify-center bg-product_bg w-14 h-14 rounded-xl">
          <MdOutlineVerified className="w-6 h-6 text-[#797979]"></MdOutlineVerified>
        </div>
        <div className="text-center">
          <p className="text-secondary">Guaranteed</p>
          <p>1 year</p>
        </div>
      </div>
    </>
  );
};

export default DeliveryStuff;
