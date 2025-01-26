import React from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const CardProduct = ({ product }) => {
  const { ToggleProductInWishlist, whishlistProducts } = useGlobalContext();
  const { id, title, description, price, images } = product;
  const navigate = useNavigate();

  //if product is already in wishlist , set red icon
  const isInWishlist = whishlistProducts.some(
    (wishlistProduct) => wishlistProduct.id === id
  );

  return (
    <div className="relative px-3 pb-6 rounded-lg bg-product_bg pt-14">
      <div className="text-center">
        <img
          src={images[0]}
          className="object-contain mx-auto mb-2 w-28 h-28 lg:mb-4"
          alt={title}
        ></img>
        <h4 className="mb-4 text-lg font-medium leading-6 lg:font-normal line-clamp-2 ">
          {description}
        </h4>
        <h2 className="mb-4 text-2xl font-semibold xl:mb-6">${price}</h2>
        <button
          className="w-full py-3 text-white bg-black rounded-lg"
          onClick={() => navigate(`/Product/${id}`)}
        >
          Buy Now
        </button>
      </div>
      <button
        className="absolute top-4 right-3 text-[32px]"
        onClick={() => ToggleProductInWishlist(product)}
      >
        <CiHeart className={isInWishlist ? "text-red-700" : ""}></CiHeart>
      </button>
    </div>
  );
};

export default CardProduct;
