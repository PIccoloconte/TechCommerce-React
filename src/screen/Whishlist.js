import React from "react";
import { useGlobalContext } from "../context";
import CardProduct from "../components/CardProduct";
import BackToShopBtn from "../components/BackToShopBtn";

const Whishlist = () => {
  const { whishlistProducts } = useGlobalContext();

  return (
    <div className="mt-[97px] lg:mt-[150px] px-4 lg:px-40">
      <h2 className="mb-10 text-2xl font-semibold">Whishlist</h2>
      <div
        className={` pb-10 grid ${
          whishlistProducts.length <= 0
            ? "place-items-start"
            : "place-items-center grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        } `}
      >
        {whishlistProducts.length <= 0 ? (
          <BackToShopBtn />
        ) : (
          whishlistProducts.map((product) => {
            return (
              <CardProduct key={product.id} product={product}></CardProduct>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Whishlist;
