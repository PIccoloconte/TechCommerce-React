import { useState, useEffect, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [valueURL, setvalueURL] = useState("/category/smartphones");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoading, isError, data } = useFetch(`${valueURL}`);
  //cart
  const [cartProducts, setCardProducts] = useState([]);
  const [cartItemIcon, setCartItemIcon] = useState(0);
  //Whishlist
  const [whishlistProducts, setWhishlistProducts] = useState([]);
  const [whishlistItemIcon, setWishlistItemIcon] = useState(0);
  //Address Page
  const [addressList, setAddressList] = useState([]);
  //SearchBar
  const [searchQuery, setSearchQuery] = useState("");
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
  //Change searchbar value
  const ChangeSearchBarValue = (value) => {
    setSearchQuery(value);
  };

  const ChangeCartCountIcon = (value) => {
    if (value === 1) {
      setCartItemIcon(cartItemIcon + value);
    } else {
      if (cartItemIcon > 0) {
        if (value <= -1) {
          setCartItemIcon(cartItemIcon + value);
        }
      }
    }
  };

  const AddProductToCart = (newProd) => {
    ChangeCartCountIcon(1);
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

  //Add and remove item from whishlist
  const ToggleProductInWishlist = (newProd) => {
    setWhishlistProducts((prevWishlistProducts) => {
      const isProductInWishlist = prevWishlistProducts.some(
        (product) => product.id === newProd.id
      );

      if (isProductInWishlist) {
        console.log(whishlistItemIcon);

        setWishlistItemIcon(whishlistItemIcon - 1);
        return prevWishlistProducts.filter(
          (product) => product.id !== newProd.id
        );
      } else {
        setWishlistItemIcon(whishlistItemIcon + 1);
        return [...prevWishlistProducts, newProd];
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
        cartItemIcon,
        ChangeCartCountIcon,
        addressList,
        setAddressList,
        searchQuery,
        ChangeSearchBarValue,
        whishlistProducts,
        ToggleProductInWishlist,
        whishlistItemIcon,
        setWishlistItemIcon,
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
