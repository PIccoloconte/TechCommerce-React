import React from "react";

const ScreenInfo = () => {
  return (
    <>
      <h1 className="mb-8 text-3xl">Screen</h1>
      <div className="flex justify-between border-b-[1px] border-opacity-5-6 font-normal">
        <p>Screen diagonal</p>
        <p>6.7"</p>
      </div>
      <div className="flex justify-between border-b-[1px] border-opacity-5-6 font-normal">
        <p>The screen resolution</p>
        <p>2796x1290</p>
      </div>
      <div className="flex justify-between border-b-[1px] border-opacity-5-6 font-normal">
        <p>The screen refresh rate</p>
        <p>120 Hz</p>
      </div>
      <div className="flex justify-between border-b-[1px] border-opacity-5-6 font-normal">
        <p>The pixel density</p>
        <p>460 ppi</p>
      </div>
      <div className="flex justify-between border-b-[1px] border-opacity-5-6 font-normal">
        <p>Screen type</p>
        <p>OLED</p>
      </div>
      <div className="flex justify-between border-b-[1px] border-opacity-5-6 font-normal text-end">
        <p>Additionally</p>
        <div>
          <p>Dynamic Island</p>
          <p>Always-On display</p>
          <p>HDR display</p>
          <p>True Tone</p>
          <p>Wide color (P3)</p>
        </div>
      </div>
    </>
  );
};

export default ScreenInfo;
