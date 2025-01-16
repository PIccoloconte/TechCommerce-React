import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [valueURL, setvalueURL] = useState("/category/smartphones");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoading, isError, data } = useFetch(`${valueURL}`);
  //console.log(changeUrl);
  //SIDEBAR FUNCTIONS
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const ChangeGlobalURL = (input) => {
    setvalueURL(input);
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
