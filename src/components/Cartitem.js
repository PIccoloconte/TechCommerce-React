import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useGlobalContext } from "../context";

const Cartitem = ({ id, title, images, price, quantity }) => {
  const { setCardProducts } = useGlobalContext();

  // Increase qty
  const incrementQuantity = () => {
    setCardProducts((prevCartProducts) =>
      prevCartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Decrease qty
  const decrementQuantity = () => {
    setCardProducts((prevCartProducts) => {
      // Mappa i prodotti per decrementare la quantità
      const updatedCart = prevCartProducts.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      // Delete product if qty < 0
      return updatedCart.filter((product) => product.quantity > 0);
    });
  };

  return (
    <>
      <div className="flex items-center gap-4 py-4">
        <img
          className="w-[90px] h-[90px] object-contain"
          src={images[0]}
          alt="title"
        ></img>
        <div className="w-full">
          <div className="mb-2">
            <h5 className="mb-2 font-medium">{title}</h5>
            <p>#{id}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={decrementQuantity}>
                <FiMinus className="w-6 h-6"></FiMinus>
              </button>
              <input
                type="text"
                disabled
                value={quantity}
                className="w-12 mx-2 max-w-[40px] text-center bg-white border border-opacity-30 rounded-[4px]"
              ></input>
              <button onClick={incrementQuantity}>
                <FiPlus className="w-6 h-6"></FiPlus>
              </button>
            </div>
            <p className="text-xl font-medium">${price}</p>
            <IoCloseOutline className="w-6 h-6"></IoCloseOutline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
