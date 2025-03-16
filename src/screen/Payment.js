import React, { useState } from "react";
import CreditCard from "../assets/img/CreditCard.png";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ImageComponent from "../components/ImageComponents";

const mainHash = "L25qqzC6]#K50}}SF{^NvfAD~BI:";

const Payment = () => {
  const [isPayPalSelected, setIsPayPalSelected] = useState(false);

  const navigate = useNavigate();

  return (
    <Container className="px-4 my-12 xl:px-40">
      <h1 className="mb-8 text-xl font-semibold">Payment</h1>
      <div className="flex justify-around mb-10">
        <p
          className={`pb-2 font-medium ${
            isPayPalSelected ? "text-secondary" : "border-b border-black"
          } cursor-pointer w-fit`}
          onClick={() => setIsPayPalSelected(false)}
        >
          Credit Card
        </p>
        <p
          className={`pb-2 font-medium ${
            isPayPalSelected ? "border-b border-black" : "text-secondary"
          } cursor-pointer`}
          onClick={() => setIsPayPalSelected(true)}
        >
          PayPal
        </p>
      </div>
      {/* <img src={CreditCard} alt="CreditCard" className="mb-10"></img> */}
      {!isPayPalSelected ? (
        <div>
          <ImageComponent
            src={CreditCard}
            hash={mainHash}
            className="object-cover w-[337px] h-[190px] mb-10 mx-0"
          ></ImageComponent>
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
              <input
                type="checkbox"
                id="billing"
                className="mr-2 cursor-pointer"
              ></input>
              <label htmlFor="billing" className="font-medium cursor-pointer">
                Same as billing address
              </label>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-center mb-10">
          <button className="bg-[#FFc43a] py-3 px-5 rounded-xl w-56 lg:w-96 lg:py-6 cursor-pointer ">
            <span className=" text-[#003087] text-2xl font-semibold">Pay</span>
            <span className=" text-[#026cff] text-2xl font-semibold">Pal</span>
          </button>
        </div>
      )}

      <div className="flex items-center justify-between gap-6">
        <button
          className="flex-1 py-6 font-medium border border-black rounded-md max-w-52"
          onClick={() => navigate(`/Checkout/Shipping`)}
        >
          Back
        </button>
        <button
          className={`${
            isPayPalSelected ? "opacity-30" : "opacity-100"
          } flex-1 py-6 font-medium text-white bg-black border rounded-md max-w-52`}
          disabled={isPayPalSelected}
        >
          Pay
        </button>
      </div>
    </Container>
  );
};

export default Payment;
