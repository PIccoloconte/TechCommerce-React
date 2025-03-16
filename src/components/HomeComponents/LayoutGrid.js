import React from "react";
import AirPods from "../../assets/img/AirPods.png";
import MacBook from "../../assets/img/MacBook.png";
import PlayStation from "../../assets/img/PlayStation.png";
import VisionPro from "../../assets/img/VisionPro.png";
import { ShopNow } from "../Buttons";

const card = [
  {
    id: "card_Playstation",
    img: PlayStation,
    title: "Playstation",
    titleStrong: " 5",
    titleColor: "text-black",
    subtitle:
      "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O  will redefine your PlayStation experience.",
    bgColor: "#FFFFFF",
    zIndex: "z-[0]",
    xl_column: "xl:col-span-2",
    xl_translate_img: "xl:-translate-x-[50px]",
    xl_translate_text: "xl:-translate-x-[0px]",
  },
  {
    id: "card_AirPods",
    img: AirPods,
    title: "Apple AirPods",
    titleStrong: " Max",
    titleColor: "text-black",
    subtitle: "Computational audio. Listen, it's powerful.",
    bgColor: "#EDEDED",
    zIndex: "z-[1]",
    xl_column: "xl:col-span-1",
    xl_translate_img: "xl:-translate-x-[120px]",
    xl_translate_text: "xl:-translate-x-[100px]",
    xl_text_width: "xl:w-[150px]",
  },
  {
    id: "card_VisionPro",
    img: VisionPro,
    title: "Apple Vision",
    titleStrong: " Pro",
    titleColor: "text-white",
    subtitle: "An immersive way to experience entertainment.",
    bgColor: "#353535",
    zIndex: "z-[0]",
    xl_column_column: "xl:col-span-1",
    xl_translate_img: "xl:-translate-x-[180px]",
    xl_translate_text: "xl:-translate-x-[150px]",
    xl_text_width: "xl:w-[150px]",
  },
];

const LayoutGrid = () => {
  return (
    <>
      <div className="flex flex-col text-center xl:flex-row">
        <div className="xl:flex-1">
          <div className="grid xl:grid-rows-2 xl:grid-cols-2">
            {card.map((el) => {
              return (
                <div
                  key={el.id}
                  className={`row-span-1 ${el.xl_column} ${el.zIndex} p-6 flex flex-col xl:flex-row items-center space-x-4`}
                  style={{ backgroundColor: el.bgColor }}
                >
                  <img
                    src={el.img}
                    alt={el.title}
                    className={`h-48 ${el.xl_translate_img}`}
                  />
                  <div className={`xl:text-start ${el.xl_translate_text}`}>
                    <h2
                      className={`text-2xl font-normal ${el.titleColor} ${el.xl_text_width}`}
                    >
                      {el.title}
                      <strong>{el.titleStrong}</strong>
                    </h2>
                    <p className="text-secondary">{el.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="xl:flex-1">
          <div className="p-6 bg-[#EDEDED] xl:h-[480px] xl:flex xl:flex-row-reverse xl:items-center">
            <img src={MacBook} alt="Apple Vision Pro" className="h-48 m-auto" />
            <div className="xl:text-start ">
              <h2 className="mb-4 text-3xl font-bold">
                Macbook<span className="font-normal"> Air</span>
              </h2>
              <p className="text-secondary mb-4">
                The new 15-inch MacBook Air makes room for more of whant you
                love with a spacious Liquid Retina display
              </p>
              <ShopNow mbValue={0} color={"black"} ProductID={78}></ShopNow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutGrid;
