import React from "react";
import MacBook from "../assets/img/MacBook.png";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Cartitem = () => {
  return (
    <>
      <div className="flex items-center gap-4 py-4">
        <img
          className="w-[90px] h-[90px] object-contain"
          src={MacBook}
          alt="macBook"
        ></img>
        <div>
          <div className="mb-2">
            <h5 className="mb-2 font-medium">
              Apple iPhone 14 Pro Max 128Gb Deep Purple
            </h5>
            <p>#25139526913984</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button>
                <FiMinus className="w-6 h-6"></FiMinus>
              </button>
              <input
                type="text"
                disabled
                value={1}
                className="w-12 mx-2 max-w-[40px] text-center bg-white border border-opacity-30 rounded-[4px]"
              ></input>
              <button>
                <FiPlus className="w-6 h-6"></FiPlus>
              </button>
            </div>
            <p className="text-xl font-medium">$1399</p>
            <IoCloseOutline className="w-6 h-6"></IoCloseOutline>
          </div>
        </div>
      </div>
    </>
  );
};

const Cart = () => {
  return (
    <div className="mt-[97px] lg:mt-[150px] px-4">
      <div className="w-full gap-12 lg:flex">
        <section className="py-10 lg:flex-1">
          <h2 className="mb-10 text-2xl font-semibold">Shopping Cart</h2>
          <Cartitem></Cartitem>
          <hr className="my-10"></hr>
          <Cartitem></Cartitem>
          <hr className="my-10"></hr>
          <Cartitem></Cartitem>
          <hr className="my-10"></hr>
          <Cartitem></Cartitem>
          <hr className="my-10"></hr>
          <Cartitem></Cartitem>
          <hr className="my-10"></hr>
          <Cartitem></Cartitem>
          <hr className="my-10"></hr>
          <Cartitem></Cartitem>
        </section>
        <section className="px-4 mb-10 border py-14 lg:py-10 border-opacity-30 rounded-xl lg:flex-1 lg:h-fit">
          <h2 className="mb-10 text-2xl font-semibold">Order Summary</h2>
          <div className="mb-6">
            <p className="text-[#545454] font-medium mb-2">
              Discount code/promo code
            </p>
            <input
              type="text"
              className="w-full p-4 border rounded-md border-opacity-30"
              placeholder="Code"
            ></input>
          </div>
          <div className="mb-6">
            <p className="text-[#545454] font-medium mb-2">
              Your bonus card number
            </p>
            <div className="position-relative">
              <input
                type="text"
                className="w-full p-4 mb-6 border rounded-md border-opacity-30"
                placeholder="Enter Card Number"
              ></input>
              <button className="py-2 px-4 border rounded-md font-medium text-xs border-black absolute right-[50px] translate-y-3">
                Apply
              </button>
            </div>
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4 font-medium">
                <p>Subtotal</p>
                <p>$2347</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#545454]">Estimated Tax</p>
                <p className="font-medium">$50</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#545454]">Estimated shipping </p>
                <p className="font-medium">$29</p>
              </div>
              <div className="flex items-center justify-between mb-4 font-medium">
                <p>Total</p>
                <p>$2426</p>
              </div>
            </div>
          </div>
          <button className="w-full py-4 text-white bg-black rounded-md">
            Checkout
          </button>
        </section>
      </div>
    </div>
  );
};

export default Cart;
