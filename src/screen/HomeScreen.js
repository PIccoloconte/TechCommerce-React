import React from "react";
import LayoutGrid from "../components/HomeComponents/LayoutGrid";
import Hero from "../components/HomeComponents/Hero";
import Category from "../components/HomeComponents/Category";
import NewArrival from "../components/HomeComponents/NewArrival";
import SummerSaleBanner from "../components/HomeComponents/SummerSaleBanner";
import Carousel from "../components/HomeComponents/Carousel";
import Container from "../components/Container";

const HomeScreen = () => {
  return (
    <Container className="mt-[97px] lg:mt-[81px]">
      <Hero></Hero>
      <LayoutGrid></LayoutGrid>
      <Category></Category>
      <NewArrival></NewArrival>
      <Carousel></Carousel>
      <SummerSaleBanner></SummerSaleBanner>
    </Container>
  );
};
export default HomeScreen;
