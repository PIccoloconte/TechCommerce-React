import React, { useState } from "react";
import CreditCard from "../assets/img/CreditCard.png";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
const Payment = () => {
  const navigate = useNavigate();

  return (
    <Container className="px-4 my-12 xl:px-40">
      <h1 className="mb-8 text-xl font-semibold">Payment</h1>
      <div className="flex justify-around mb-10">
        <p className="pb-2 font-medium border-b border-black w-fit">
          Credit Card
        </p>
        <p className="font-medium pb-2  text-secondary">PayPal</p>
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
        <div className="flex items-center my-10">
          <input type="checkbox" id="billing" className="mr-2"></input>
          <label htmlFor="billing" className="font-medium">
            Same as billing address
          </label>
        </div>
      </form>

      <div className="flex items-center justify-between gap-6">
        <button
          className="flex-1 py-6 font-medium border border-black rounded-md max-w-52"
          onClick={() => navigate(`/Checkout/Shipping`)}
        >
          Back
        </button>
        <button className="flex-1 py-6 font-medium text-white bg-black border rounded-md max-w-52">
          Pay
        </button>
      </div>
    </Container>
  );
};

export default Payment;
