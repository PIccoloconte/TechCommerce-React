import React from "react";
import MacBook from "../assets/img/MacBook.png";
import PlayStation from "../assets/img/PlayStation.png";
import { BsCpu } from "react-icons/bs";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import CardProduct from "../components/CardProduct";
import { MdScreenshot } from "react-icons/md";
import { PiCpuLight } from "react-icons/pi";
import { BsCameraFill } from "react-icons/bs";
import { IoCameraReverse } from "react-icons/io5";
import { GiBattery75 } from "react-icons/gi";

const dataReview = [
  { label: "Excellent", percentage: 100 },
  { label: "Good", percentage: 50 },
  { label: "Average", percentage: 30 },
  { label: "Below Average", percentage: 70 },
  { label: "Poor", percentage: 10 },
];
const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="flex items-center mb-4">
      {/* Label */}
      <div className="w-1/4 text-sm font-medium">{label}</div>
      {/* Progress Bar */}
      <div className="w-3/4 bg-gray-300 rounded-full h-[5px] relative">
        <div
          className="bg-[#FFB547] h-[5px] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="mt-[133px] px-4 lg:px-40">
      <div className="lg:flex">
        <div className="mb-9 lg:flex-1">
          <div className="flex flex-col m-auto lg:flex-row-reverse ">
            <img
              className="object-contain m-auto w-72 h-72"
              src={MacBook}
              alt="iphone"
            ></img>
            <div className="flex justify-between lg:flex-col">
              <img
                className="w-[75px] h-[75px] object-contain"
                src={MacBook}
                alt="iphone"
              ></img>
              <img
                className="w-[75px] h-[75px] object-contain opacity-40"
                src={MacBook}
                alt="iphone"
              ></img>
              <img
                className="w-[75px] h-[75px] object-contain opacity-40"
                src={MacBook}
                alt="iphone"
              ></img>
              <img
                className="w-[75px] h-[75px] object-contain opacity-40"
                src={MacBook}
                alt="iphone"
              ></img>
            </div>
          </div>
        </div>

        <div className="lg:flex-1">
          <section>
            <h1 className="mb-6 text-4xl font-bold">Apple Iphone Pro Max</h1>
            <p className="mb-4 text-3xl font-medium">$1399</p>
            <div className="flex items-center mb-6 gap-7">
              <p>Select Color:</p>
              <ul className="flex gap-2">
                <li className="w-8 h-8 rounded-[50%] bg-black"></li>
                <li className="w-8 h-8 rounded-[50%] bg-purple-600"></li>
                <li className="w-8 h-8 rounded-[50%] bg-red-600"></li>
                <li className="w-8 h-8 rounded-[50%] bg-orange-400"></li>
                <li className="w-8 h-8 rounded-[50%] bg-gray-400"></li>
              </ul>
            </div>
            <div className="flex justify-between gap-2 mb-6">
              <div className="flex-1 px-4 py-4 text-sm text-center border border-black rounded-lg">
                128GB
              </div>
              <div className="flex-1 px-4 py-4 text-sm text-center border border-black rounded-lg">
                256GB
              </div>
              <div className="flex-1 px-4 py-4 text-sm text-center border border-black rounded-lg">
                512GB
              </div>
              <div className="flex-1 px-4 py-4 text-sm text-center border border-black rounded-lg">
                1TB
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 mb-6 place-items-center">
              <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
                <MdScreenshot className="w-6 h-6 text-[#4E4E4E]"></MdScreenshot>
                <div>
                  <p className="text-sm text-[#A7A7A7]">Screen size</p>
                  <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
                </div>
              </div>
              <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
                <BsCpu className="w-6 h-6 text-[#4E4E4E]"></BsCpu>
                <div>
                  <p className="text-sm text-[#A7A7A7]">Screen size</p>
                  <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
                </div>
              </div>
              <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
                <PiCpuLight className="w-6 h-6 text-[#4E4E4E]"></PiCpuLight>
                <div>
                  <p className="text-sm text-[#A7A7A7]">Screen size</p>
                  <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
                </div>
              </div>
              <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
                <IoCameraReverse className="w-6 h-6 text-[#4E4E4E]"></IoCameraReverse>
                <div>
                  <p className="text-sm text-[#A7A7A7]">Screen size</p>
                  <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
                </div>
              </div>
              <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
                <BsCameraFill className="w-6 h-6 text-[#4E4E4E]"></BsCameraFill>
                <div>
                  <p className="text-sm text-[#A7A7A7]">Screen size</p>
                  <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
                </div>
              </div>
              <div className="flex items-center w-full gap-2 px-2 py-4 rounded-lg bg-product_bg">
                <GiBattery75 className="w-6 h-6 text-[#4E4E4E]"></GiBattery75>
                <div>
                  <p className="text-sm text-[#A7A7A7]">Screen size</p>
                  <p className="text-sm text-[#4E4E4E] font-bold">6.7"</p>
                </div>
              </div>
            </div>
            <p className="mb-6 text-[#6C6C6C]">
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras.
            </p>
          </section>
          <div className="flex flex-col gap-4 mb-8 md:flex-row">
            <button className="w-full py-4 border border-black rounded-md">
              Add to wishlist{" "}
            </button>
            <button className="w-full py-4 text-white bg-black border rounded-md">
              Add to Card{" "}
            </button>
          </div>
          <section className="flex justify-between gap-5 mb-9">
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center justify-center bg-product_bg w-14 h-14 rounded-xl">
                <BsCpu className="w-6 h-6 text-[#797979]"></BsCpu>
              </div>
              <div className="text-center">
                <p className="text-[#717171]">Free delivery</p>
                <p>1-2 day</p>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center justify-center bg-product_bg w-14 h-14 rounded-xl">
                <BsCpu className="w-6 h-6 text-[#797979]"></BsCpu>
              </div>
              <div className="text-center">
                <p className="text-[#717171]">Free delivery</p>
                <p>1-2 day</p>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center justify-center bg-product_bg w-14 h-14 rounded-xl">
                <BsCpu className="w-6 h-6 text-[#797979]"></BsCpu>
              </div>
              <div className="text-center">
                <p className="text-[#717171]">Free delivery</p>
                <p>1-2 day</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="mt-12 mb-8 ">
        <h1 className="mb-8 text-3xl">Details</h1>
        <p className="text-[#9D9D9D]">
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </p>
      </section>
      <section>
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
      </section>
      <section>
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
      </section>
      <section className="my-9">
        <h1 className="mb-8 text-3xl">Reviews</h1>
        <div className="lg:flex gap-14">
          <div className="mb-14">
            <div className="flex gap-4 items-center bg-[#FAFAFA] w-fit p-8 rounded-3xl mx-auto lg:flex-col">
              <div className="lg:text-center">
                <h1 className="mb-4 text-5xl">4.8</h1>
                <p className="text-[#9D9D9D]">of 125 reviews</p>
              </div>
              <div className="flex gap-1">
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaRegStarHalfStroke className="w-6 h-6 text-yellow-500"></FaRegStarHalfStroke>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto mb-12">
            {dataReview.map((item, index) => (
              <ProgressBar
                key={index}
                label={item.label}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
        <form className="mb-8">
          <input
            type="text"
            placeholder="Leave comment"
            className="w-full px-4 py-6 border border-opacity-50 rounded-lg"
          ></input>
        </form>
        <div className="bg-[#FAFAFA] px-4 py-6 w-full rounded-lg mb-6">
          <div className="flex gap-2 ">
            <img
              className="w-14 h-14 rounded-[50%]"
              src={MacBook}
              alt="mcbook"
            ></img>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-lg font-semibold">Grace Carey</h5>
                <p className="text-[#9C9C9C] text-sm">24/1/2023</p>
              </div>
              <div className="flex gap-1 mb-2">
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaRegStarHalfStroke className="w-6 h-6 text-yellow-500"></FaRegStarHalfStroke>
              </div>
              <p className="text-[#7E7E7E]">
                I was a bit nervous to be buying a secondhand phone from Amazon,
                but I couldn’t be happier with my purchase!! I have a pre-paid
                data plan so I was worried that this phone wouldn’t connect with
                my data plan, since the new phones don’t have the physical Sim
                tray anymore, but couldn’t have been easier! I bought an
                Unlocked black iPhone 14 Pro Max in excellent condition and
                everything is PERFECT. It was super easy to set up and the phone
                works and looks great. It truly was in excellent condition.
                Highly recommend!!!🖤
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] px-4 py-6 w-full rounded-lg mb-6">
          <div className="flex gap-2 ">
            <img
              className="w-14 h-14 rounded-[50%]"
              src={MacBook}
              alt="mcbook"
            ></img>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-lg font-semibold">Grace Carey</h5>
                <p className="text-[#9C9C9C] text-sm">24/1/2023</p>
              </div>
              <div className="flex gap-1 mb-2">
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaRegStarHalfStroke className="w-6 h-6 text-yellow-500"></FaRegStarHalfStroke>
              </div>
              <p className="text-[#7E7E7E]">
                I was a bit nervous to be buying a secondhand phone from Amazon,
                but I couldn’t be happier with my purchase!! I have a pre-paid
                data plan so I was worried that this phone wouldn’t connect with
                my data plan, since the new phones don’t have the physical Sim
                tray anymore, but couldn’t have been easier! I bought an
                Unlocked black iPhone 14 Pro Max in excellent condition and
                everything is PERFECT. It was super easy to set up and the phone
                works and looks great. It truly was in excellent condition.
                Highly recommend!!!🖤
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] px-4 py-6 w-full rounded-lg mb-6">
          <div className="flex gap-2 ">
            <img
              className="w-14 h-14 rounded-[50%]"
              src={MacBook}
              alt="mcbook"
            ></img>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-lg font-semibold">Grace Carey</h5>
                <p className="text-[#9C9C9C] text-sm">24/1/2023</p>
              </div>
              <div className="flex gap-1 mb-2">
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaStar className="w-6 h-6 text-yellow-500"></FaStar>
                <FaRegStarHalfStroke className="w-6 h-6 text-yellow-500"></FaRegStarHalfStroke>
              </div>
              <p className="text-[#7E7E7E]">
                I was a bit nervous to be buying a secondhand phone from Amazon,
                but I couldn’t be happier with my purchase!! I have a pre-paid
                data plan so I was worried that this phone wouldn’t connect with
                my data plan, since the new phones don’t have the physical Sim
                tray anymore, but couldn’t have been easier! I bought an
                Unlocked black iPhone 14 Pro Max in excellent condition and
                everything is PERFECT. It was super easy to set up and the phone
                works and looks great. It truly was in excellent condition.
                Highly recommend!!!🖤
              </p>
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center w-full gap-2 py-4 mx-auto mb-10 border border-black rounded-md max-w-56 ">
          <p className="font-semibold">View More</p>
          <FaAngleDown className="w-6 h-6"></FaAngleDown>
        </button>
      </section>
      <section className="my-10">
        <h1 className="mb-8 text-3xl">Related Products</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 pb-10 lg:grid-rows-1 lg:grid-cols-4 ">
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
        </div>
      </section>
    </div>
  );
};

export default Product;
