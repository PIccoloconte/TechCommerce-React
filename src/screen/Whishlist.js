import React from "react";
import { useGlobalContext } from "../context";
import CardProduct from "../components/CardProduct";
import BackToShopBtn from "../components/BackToShopBtn";
import Container from "../components/Container";
const Whishlist = () => {
  const { whishlistProducts } = useGlobalContext();

  return (
    <Container className="mt-[97px] lg:mt-[150px] px-4 lg:px-40">
      <h2 className="pt-10 pb-10 text-2xl font-semibold lg:pt-0">Whishlist</h2>
      <div
        className={` pb-10 grid ${
          whishlistProducts.length <= 0
            ? "place-items-start"
            : "place-items-center grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        } `}
      >
        {whishlistProducts.length <= 0 ? (
          <div>
            <h1 className="mb-10 text-2xl font-semibold">
              No products into Whishlist.
            </h1>
            <BackToShopBtn />
          </div>
        ) : (
          whishlistProducts.map((product) => {
            return (
              <CardProduct key={product.id} product={product}></CardProduct>
            );
          })
        )}
      </div>
    </Container>
  );
};

export default Whishlist;
