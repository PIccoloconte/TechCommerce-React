import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponents = ({ src, hash, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div
        className={`${className} ${imageLoaded ? "hidden" : "block mx-auto"}`}
      >
        <Blurhash
          width={"100%"}
          height={"100%"}
          hash={hash}
          resolutionX={32}
          resolutiony={32}
          punch={1}
        ></Blurhash>
      </div>
      <img
        className={`${className} ${!imageLoaded ? "hidden" : "block mx-auto"}`}
        src={src}
        alt="sdas"
      ></img>
    </>
  );
};

export default ImageComponents;
