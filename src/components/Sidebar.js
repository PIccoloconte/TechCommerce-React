import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { MainLinkComponent } from "../utils/Links";
import { UtilityLinks } from "../utils/Links";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const location = useLocation();

  //closes the sidebar when the page is changed
  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  return (
    <aside className="">
      {/* Sidebar */}
      <div
        className={`z-50 fixed top-0 left-0 w-64 h-full bg-[#181313] text-white transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={() => closeSidebar()}>
            <IoClose className="w-8 h-8" />
          </button>
        </div>
        <MainLinkComponent isSidebar={true}></MainLinkComponent>
        <UtilityLinks isSidebar={true}></UtilityLinks>
      </div>

      {/* Overlay che appare quando la sidebar è aperta */}
      <div
        className={`z-40 fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
    </aside>
  );
};

export default Sidebar;
