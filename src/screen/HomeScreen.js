import { useState } from "react";
import React from "react";
import { useGlobalContext } from "../context";
import LayoutGrid from "../components/LayoutGrid";
import Hero from "../components/Hero";
import Category from "../components/Category";
import NewArrival from "../components/NewArrival";
import SummerSaleBanner from "../components/SummerSaleBanner";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const { valueURL, ChangeGlobalURL } = useGlobalContext();
  const [input, setInput] = useState("/category/smartphones");
  //const { data } = useFetch();

  const handleSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);

    ChangeGlobalURL(value);
  };

  return (
    <div className="mt-[97px] lg:mt-[81px]">
      <div>
        <button
          className="p-5 bg-slate-600"
          onClick={(e) => handleSubmit(e, input)}
        >
          dsadsd
        </button>
      </div>
      <Link to="/ProductPage">ProductsPage</Link>
      <p>
        <Link to="/Product">Product</Link>
      </p>
      <p>
        <Link to="Cart">Cart</Link>
      </p>
      <p>
        <Link to="Checkout">Checkout</Link>
      </p>
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
