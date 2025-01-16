import React from "react";

const shipmentData = [
  {
    date: "17 Oct, 2025",
    deliveryCost: "Free",
    description: "Regulary shipment",
  },
  {
    date: "1 Oct, 2025",
    deliveryCost: "$8.50",
    description: "Get your delivery as soon as possible",
  },
];

const Shipping = () => {
  return (
    <div className="my-12 px-4">
      <h1 className="text-xl font-semibold mb-8">Shipment Method</h1>
      <div className="mb-10">
        {shipmentData.map((el) => {
          return (
            <div className="p-6 border border-[#D1D1D8] rounded-xl  flex items-center justify-between mb-4 last:mb-0">
              <div className="md:flex md:gap-4 flex-1">
                <input
                  className="mb-2"
                  type="radio"
                  id="freeShipment"
                  value="freeShipment"
                  name="shipment"
                  required
                ></input>
                <p className="font-medium mb-2">{el.deliveryCost}</p>
                <p>{el.description}</p>
              </div>
              <p className="font-medium flex-1 text-end">{el.date}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center gap-6">
        <button className="flex-1  max-w-52 border-black py-6 border rounded-md font-medium">
          Back
        </button>
        <button className="flex-1 max-w-52 bg-black border text-white py-6 rounded-md font-medium">
          Next
        </button>
      </div>
    </div>
  );
};

export default Shipping;
