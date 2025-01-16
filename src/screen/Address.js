import React from "react";
import { FaPen } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

const Address = () => {
  return (
    <div className="px-4 my-12 xl:px-40">
      <h1 className="mb-8 text-xl font-semibold">Select Address</h1>
      <div className="mb-6">
        <div className="flex items-baseline gap-4 p-6 mb-6 rounded-lg bg-product_bg">
          <input
            type="radio"
            id="address-1"
            value="address-1"
            name="address"
            required
          ></input>
          <div className="w-full">
            <div className="flex gap-6 mb-4">
              <p className="text-lg">Thornridge</p>
              <div className="flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-black rounded">
                HOME
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-2">
              <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
              <div className="flex items-center gap-6">
                <button>
                  <FaPen className="w-4 h-4"></FaPen>
                </button>
                <button>
                  <RiCloseLargeLine className="w-4 h-4"></RiCloseLargeLine>
                </button>
              </div>
            </div>
            <p>(209) 555-0104</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-baseline gap-4 p-6 mb-6 rounded-lg bg-product_bg">
          <input
            type="radio"
            id="address-2"
            value="address-2"
            name="address"
            required
          ></input>
          <div className="w-full">
            <div className="flex gap-6 mb-4">
              <p className="text-lg">VIlla campanile</p>
              <div className="flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-black rounded">
                HOME
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-2">
              <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
              <div className="flex items-center gap-6">
                <button>
                  <FaPen className="w-4 h-4"></FaPen>
                </button>
                <button>
                  <RiCloseLargeLine className="w-4 h-4"></RiCloseLargeLine>
                </button>
              </div>
            </div>
            <p>(209) 555-0104</p>
          </div>
        </div>
      </div>

      <div className="relative mb-16 text-center">
        <hr className="border-black border-dashed text-clip"></hr>
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  w-6 h-6 rounded-[50%] bg-black flex justify-center items-center">
          <FiPlus className="text-lg text-white"></FiPlus>
        </div>
        <p className="mt-4">Add New Address</p>
      </div>

      <div className="flex items-center justify-between gap-6 xl:justify-end">
        <button className="flex-1 py-6 font-medium border border-black rounded-md max-w-52">
          Back
        </button>
        <button className="flex-1 py-6 font-medium text-white bg-black border rounded-md max-w-52">
          Next
        </button>
      </div>
    </div>
  );
};

export default Address;
