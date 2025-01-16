import React from "react";
import CardProduct from "./CardProduct";
import CardProductsPlaceholder from "./CardProductsPlaceholder";
import { useGlobalContext } from "../context";

const NewArrival = () => {
  const { data, isLoading, isError, valueURL, ChangeGlobalURL } =
    useGlobalContext();

  if (isLoading) {
    return (
      <div className="px-4 py-14 lg:px-40">
        <div className="grid grid-cols-2 grid-rows-4 gap-4 lg:grid-rows-2 lg:grid-cols-4 place-items-center">
          <CardProductsPlaceholder />
          <CardProductsPlaceholder />
          <CardProductsPlaceholder />
          <CardProductsPlaceholder />
          <CardProductsPlaceholder />
          <CardProductsPlaceholder />
          <CardProductsPlaceholder />
          <CardProductsPlaceholder />
        </div>
      </div>
    );
  }

  const visibleProducts = data.products.slice(0, 8);

  return (
    <div className="px-4 py-14 lg:px-40">
      <h3 className="mb-12 text-lg font-medium border-b-2 border-black w-fit">
        New Arrival
      </h3>
      <div className="grid grid-cols-2 grid-rows-4 gap-4 lg:grid-rows-2 lg:grid-cols-4 place-items-center">
        {visibleProducts.map((product) => {
          return <CardProduct key={product.id} product={product}></CardProduct>;
        })}
      </div>
    </div>
  );
};

export default NewArrival;
