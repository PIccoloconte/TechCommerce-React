import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [valueURL, setvalueURL] = useState("/category/smartphones");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoading, isError, data } = useFetch(`${valueURL}`);
  const [cartProducts, setCardProducts] = useState([]);

  //Sidebar function
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  //Change fetch url
  const ChangeGlobalURL = (input) => {
    setvalueURL(input);
  };

  const AddProductToCart = (newProd) => {
    setCardProducts((prevCartProducts) => {
      //check if product is already into cart
      const existingProduct = prevCartProducts.find(
        (product) => product.id === newProd.id
      );

      if (existingProduct) {
        // Increase qty product if it's already into cart
        return prevCartProducts.map((product) =>
          product.id === newProd.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        // Add new Product if isn't into cart
        return [...prevCartProducts, { ...newProd, quantity: 1 }];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        valueURL,
        ChangeGlobalURL,
        isLoading,
        isError,
        data,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        cartProducts,
        AddProductToCart,
        setCardProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
