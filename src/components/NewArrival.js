import React, { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import CardProductsPlaceholder from "./CardProductsPlaceholder";
import { useGlobalContext } from "../context";

const NewArrival = () => {
  const { data, isLoading, isError, valueURL, ChangeGlobalURL } =
    useGlobalContext();

  const input = "/category/smartphones";

  useEffect(() => {
    ChangeGlobalURL(input);
  }, []);

  //Add Placeholder
  const renderPlaceholders = () => (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 lg:grid-rows-2 lg:grid-cols-4 place-items-center">
      {Array(8) // create an empty array with 8 element with value = null just to use map method
        .fill(null)
        .map((_, index) => (
          <CardProductsPlaceholder key={index} />
        ))}
    </div>
  );

  //Show API Porducts
  const renderProducts = () => {
    //check if data is avaliable
    if (!data || !data.products) {
      return <div>No products available</div>;
    }
    //Max 8 porducts
    const visibleProducts = data.products.slice(0, 8);

    return (
      <div className="grid grid-cols-2 grid-rows-4 gap-4 lg:grid-rows-2 lg:grid-cols-4 place-items-center">
        {visibleProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="px-4 py-14 lg:px-40">
      <h3 className="mb-12 text-lg font-medium border-b-2 border-black w-fit">
        New Arrival
      </h3>
      {isLoading || !data ? renderPlaceholders() : renderProducts()}
    </div>
  );
};

export default NewArrival;
