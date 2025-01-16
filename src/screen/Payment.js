import React from "react";
import CreditCard from "../assets/img/CreditCard.png";

const Payment = () => {
  return (
    <div className="my-12 px-4 xl:px-40">
      <h1 className="text-xl font-semibold mb-8">Payment</h1>
      <div className="flex justify-around mb-10">
        <p className="font-medium pb-2 border-b border-black w-fit">
          Credit Card
        </p>
        <p className="font-medium pb-2  text-[#717171]">PayPal</p>
      </div>
      <img src={CreditCard} alt="CreditCard" className="mb-10"></img>
      <form>
        <input
          type="text"
          placeholder="Cardholder Name"
          className="px-4 py-3 w-full border border-[#CECECE] rounded-md mb-4"
        ></input>
        <input
          type="text"
          placeholder="Card Number"
          className="px-4 py-3 w-full border border-[#CECECE] rounded-md mb-4"
        ></input>
        <div className="flex gap-4 ">
          <input
            type="text"
            placeholder="Exp.Date"
            className="flex-1 w-full  px-4 py-3 border border-[#CECECE] rounded-md "
          ></input>
          <input
            type="text"
            placeholder="CVV"
            className="flex-1 w-full  px-4 py-3 border border-[#CECECE] rounded-md "
          ></input>
        </div>
        <div className="my-10 flex items-center">
          <input type="checkbox" id="billing" className="mr-2"></input>
          <label htmlFor="billing" className="font-medium">
            Same as billing address
          </label>
        </div>
      </form>

      <div className="flex justify-between items-center gap-6">
        <button className="flex-1  max-w-52 border-black py-6 border rounded-md font-medium">
          Back
        </button>
        <button className="flex-1 max-w-52 bg-black border text-white py-6 rounded-md font-medium">
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
