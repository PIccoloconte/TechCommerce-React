import React, { useState } from "react";

const ImageGallery = ({ images, title }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="mb-9 lg:flex-1">
      <div className="flex flex-col gap-5 m-auto lg:flex-row-reverse lg:gap-0">
        <img
          className="object-contain m-auto w-72 h-72"
          src={images[currentImg]}
          alt={title}
        />
        <div className="flex justify-between gap-2 mx-auto lg:flex-col">
          {images.map((img, index) => (
            <img
              key={`${title}-${index}`}
              onClick={() => setCurrentImg(index)}
              className={`w-[75px] h-[75px] object-contain ${
                currentImg === index ? "" : "opacity-40"
              }`}
              src={img}
              alt={`${title}-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
