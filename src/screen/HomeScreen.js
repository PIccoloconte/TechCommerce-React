import React from "react";
import LayoutGrid from "../components/LayoutGrid";
import Hero from "../components/Hero";
import Category from "../components/Category";
import NewArrival from "../components/NewArrival";
import SummerSaleBanner from "../components/SummerSaleBanner";
import Carousel from "../components/Carousel";

const HomeScreen = () => {
  return (
    <div className="mt-[97px] lg:mt-[81px]">
      <Hero></Hero>
      <LayoutGrid></LayoutGrid>
      <Category></Category>
      <NewArrival></NewArrival>
      <Carousel></Carousel>
      <SummerSaleBanner></SummerSaleBanner>
    </div>
  );
};
export default HomeScreen;
