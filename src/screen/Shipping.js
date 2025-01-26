import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const shipmentData = [
  {
    date: "17 Oct, 2025",
    deliveryCost: "Free",
    description: "Regulary shipment",
    value: "freeShipment",
  },
  {
    date: "1 Oct, 2025",
    deliveryCost: "$8.50",
    description: "Get your delivery as soon as possible",
    value: "fastShipment",
  },
];

const Shipping = () => {
  const navigate = useNavigate();
  const [selectedShipping, setSelectedShipping] = useState("freeShipment"); //Current address

  const handleChange = (event) => {
    setSelectedShipping(event.target.value);
  };

  return (
    <div className="px-4 my-12">
      <h1 className="mb-8 text-xl font-semibold">Shipment Method</h1>
      <div className="mb-10">
        {shipmentData.map((el) => {
          return (
            <div
              key={el.value}
              className="p-6 border border-[#D1D1D8] rounded-xl  flex items-center justify-between mb-4 last:mb-0"
            >
              <div className="flex-1 md:flex md:gap-4">
                <input
                  className="mb-2"
                  type="radio"
                  id={el.value}
                  value={el.value}
                  name="shipment"
                  checked={selectedShipping === `${el.value}`}
                  onChange={handleChange}
                  required
                ></input>
                <p className="mb-2 font-medium">{el.deliveryCost}</p>
                <p>{el.description}</p>
              </div>
              <p className="flex-1 font-medium text-end">{el.date}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-6">
        <button
          className="flex-1 py-6 font-medium border border-black rounded-md max-w-52"
          onClick={() => navigate(`/Checkout`)}
        >
          Back
        </button>
        <button
          className="flex-1 py-6 font-medium text-white bg-black border rounded-md max-w-52"
          onClick={() => navigate(`/Checkout/Payment`)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shipping;
