import React, { useState, useEffect } from "react";
import Cartitem from "../components/Cartitem";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import BackToShopBtn from "../components/BackToShopBtn";

const tax = 22;
const Cart = () => {
  const { cartProducts } = useGlobalContext();
  console.log(cartProducts);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    if (cartProducts.length > 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [cartProducts]);

  //Price for only products
  const CalcSubtotal = () => {
    return cartProducts.reduce((total, item) => {
      return parseFloat((total + item.price * item.quantity).toFixed(2));
    }, 0);
  };
  const CalcTax = () => {
    return parseFloat(((CalcSubtotal() / 100) * tax).toFixed(2));
  };

  return (
    <div className="mt-[97px] lg:mt-[150px] px-4 lg:px-28">
      <div className="w-full gap-12 lg:flex">
        <section className="py-10 lg:flex-1">
          {cartProducts.length === 0 ? (
            <div>
              <h1 className="mb-10 text-2xl font-semibold">
                No products into cart...
              </h1>
              <BackToShopBtn />
            </div>
          ) : (
            <>
              <h2 className="mb-10 text-2xl font-semibold">Shopping Cart</h2>
              {cartProducts.map((prod) => {
                return (
                  <div key={prod.id}>
                    <Cartitem {...prod}></Cartitem>
                    <hr className="my-10"></hr>
                  </div>
                );
              })}
            </>
          )}
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
              <button className="py-2 px-4 border rounded-md font-medium text-xs border-black absolute right-[50px] lg:right-[145px] translate-y-3">
                Apply
              </button>
            </div>
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4 font-medium">
                <p>Subtotal</p>
                <p>${CalcSubtotal()}</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#545454]">Estimated Tax</p>
                <p className="font-medium">
                  ${`${CalcSubtotal() === 0 ? 0 : CalcTax()}`}
                </p>
              </div>
              <div className="flex items-center justify-between mb-4 font-medium">
                <p>Total</p>
                <p>{"$" + (CalcSubtotal() + CalcTax()).toFixed(2)}</p>
              </div>
            </div>
          </div>
          <Link to="/Checkout">
            <button
              className={`w-full py-4 text-white bg-black rounded-md ${
                isCartEmpty ? "opacity-30" : "opacity-100"
              }`}
              disabled={isCartEmpty}
            >
              Checkout
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Cart;
