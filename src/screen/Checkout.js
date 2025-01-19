import React from "react";
import { Outlet, Link } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { BiSolidCreditCardAlt } from "react-icons/bi";

const CheckoutSection = [
  {
    icon: <GiPositionMarker className="text-white" />,
    step: "Step 1",
    name: "Address",
  },
  {
    icon: <MdLocalShipping className="text-white" />,
    step: "Step 2",
    name: "Shipping",
  },
  {
    icon: <GiPositionMarker className="text-white" />,
    step: "Step 1",
    name: "Paymnet",
  },
];

const Checkout = () => {
  return (
    <div className="mt-[97px]">
      <div className="flex items-center gap-2 px-4 py-8 xl:px-40">
        {CheckoutSection.map((el) => {
          return (
            <div
              key={el.name}
              className="flex items-center flex-1 gap-2 md:justify-center "
            >
              <div className="w-6 h-6 rounded-[50%] bg-black flex justify-center items-center">
                {el.icon}
              </div>
              <div>
                <small className="text-sm font-medium">{el.step}</small>
                <p className="text-lg font-semibold">{el.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Checkout;
