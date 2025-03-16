import { MdScreenshot } from "react-icons/md";
import { BsCpu, BsCameraFill } from "react-icons/bs";
import { PiCpuLight } from "react-icons/pi";
import { IoCameraReverse } from "react-icons/io5";
import { GiBattery75 } from "react-icons/gi";

const ProductFeatures = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 mb-6 place-items-center">
      <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
        <MdScreenshot className="w-6 h-6 text-[#4E4E4E]"></MdScreenshot>
        <div>
          <p className="text-sm text-secondary">Screen size</p>
          <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
        </div>
      </div>
      <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
        <BsCpu className="w-6 h-6 text-[#4E4E4E]"></BsCpu>
        <div>
          <p className="text-sm text-secondary">Screen size</p>
          <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
        </div>
      </div>
      <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
        <PiCpuLight className="w-6 h-6 text-[#4E4E4E]"></PiCpuLight>
        <div>
          <p className="text-sm text-secondary">Screen size</p>
          <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
        </div>
      </div>
      <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
        <IoCameraReverse className="w-6 h-6 text-[#4E4E4E]"></IoCameraReverse>
        <div>
          <p className="text-sm text-secondary">Screen size</p>
          <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
        </div>
      </div>
      <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
        <BsCameraFill className="w-6 h-6 text-[#4E4E4E]"></BsCameraFill>
        <div>
          <p className="text-sm text-secondary">Screen size</p>
          <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
        </div>
      </div>
      <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
        <GiBattery75 className="w-6 h-6 text-[#4E4E4E]"></GiBattery75>
        <div>
          <p className="text-sm text-secondary">Screen size</p>
          <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
