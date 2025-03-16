import React, { useState, useRef } from "react";
import AirPods from "../../assets/img/AirPods.png";
import MacBook from "../../assets/img/MacBook.png";
import PlayStation from "../../assets/img/PlayStation.png";
import VisionPro from "../../assets/img/VisionPro.png";
import { ShopNow } from "../Buttons";

const ScrollProducs = [
  {
    id: "Scroll_Playstation",
    img: PlayStation,
    title: "Playstation 5",
    subtitle:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    bgColor: "#FFFFFF",
    ProductID: 106,
  },
  {
    id: "Scroll_VisionPro",
    img: VisionPro,
    title: "Vision Pro",
    subtitle:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    bgColor: "#F9F9F9",
    ProductID: 112,
  },
  {
    id: "Scroll_AirPods",
    img: AirPods,
    title: "AirPods",
    subtitle:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    bgColor: "#EAEAEA",
    ProductID: 100,
  },
  {
    id: "Scroll_MacBook",
    img: MacBook,
    title: "MacBook",
    subtitle:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    bgColor: "#2C2C2C",
    ProductID: 78,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft; //width totale = width del prodotto * n° prodotti fino dove ho scrollato
      const width = carouselRef.current.offsetWidth; //la width del singolo prodotto, rimane costante
      console.log(width);

      const index = Math.round(scrollPosition / width);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll pt-14 pb-14 scroll-smooth snap-x snap-mandatory"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {ScrollProducs.map((el) => {
          return (
            <div
              key={el.id}
              className="flex flex-col items-center justify-center flex-shrink-0 w-full pb-12 snap-center lg:flex-1 "
              style={{ backgroundColor: el.bgColor }}
            >
              <img
                src={el.img}
                alt="First Slide"
                className="object-none mb-4 h-80 w-80"
              />
              <h1 className="px-8 mb-4 text-5xl">{el.title}</h1>
              <p className="text-secondary mb-4 px-8">{el.subtitle}</p>
              <ShopNow
                mbValue={28}
                color={"black"}
                ProductID={el.ProductID}
              ></ShopNow>
            </div>
          );
        })}
      </div>

      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-16 left-1/2 lg:opacity-0">
        {ScrollProducs.map((el, index) => {
          return (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
