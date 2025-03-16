import React, { useRef, useState, useEffect } from "react";
import SummerSaleBannerDesktop from "../../assets/img/SummerSaleBannerDesktop.png";
import SummerSaleBannerMobile from "../../assets/img/SummerSaleBannerMobile.png";
import { ShopNow } from "../Buttons";

const SummerSaleBanner = () => {
  const bannerRef = useRef(null);
  const [bannerSrc, setBannerSrc] = useState(SummerSaleBannerMobile);

  const UpdateImgBanner = () => {
    if (bannerRef.current) {
      if (bannerRef.current.offsetWidth > 900) {
        setBannerSrc(SummerSaleBannerDesktop);
      } else {
        setBannerSrc(SummerSaleBannerMobile);
      }
    }
  };

  useEffect(() => {
    //Uso lo useState per assicurarmi che il ref del div venga preso solamente una volta renderizzato il  componente , altrimenti ref = null
    UpdateImgBanner();
  }, []);

  return (
    <div className="relative">
      <img
        ref={bannerRef}
        className="w-full "
        src={bannerSrc}
        alt="summerSale"
      ></img>
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-5xl font-thin text-[#FAFAFA] whitespace-nowrap">
          Big Summer
        </h1>
        <h1 className="text-5xl font-bold text-[#FAFAFA]">Sale</h1>
        <p className="mb-8 text-xl text-secondary">
          Created to change everything for the better. For everyone
        </p>
        <ShopNow mbValue={12} color={"white"}></ShopNow>
      </div>
    </div>
  );
};

export default SummerSaleBanner;
