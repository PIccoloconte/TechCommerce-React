import React from "react";

const CPU = () => {
  return (
    <>
      <h1 className="mb-8 text-3xl">CPU</h1>
      <div className="flex justify-between border-b-[1px] border-opacity-50 my-6 font-normal">
        <p>CPU</p>
        <p>A16 Bionic</p>
      </div>
      <div className="flex justify-between border-b-[1px] border-opacity-50 my-6 font-normal">
        <p>Number of cores</p>
        <p>6</p>
      </div>
      <div className="flex justify-between border-b-[1px] border-opacity-50 my-6 font-normal">
        <p>Screen type</p>
        <p>OLED</p>
      </div>
    </>
  );
};

export default CPU;
