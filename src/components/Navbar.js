import React from "react";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MainLinkComponent, UtilityLinks } from "../utils/Links";
import { useGlobalContext } from "../context";
import { formToJSON } from "axios";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="top-0 left-0 w-full fixed bg-white z-50">
      <div className="flex justify-between items-center px-4 py-6 2xl:px-40 lg:py-4 border-b-2">
        <Link to="/">
          <strong className="text-xl">Cyber</strong>
        </Link>
        <form className="bg-search_bg rounded-lg lg:max-w-96 lg:w-full">
          <div className="relative flex items-center w-auto h-12 rounded-lg  overflow-hidden">
            <button className="place-items-center w-12 text-gray-300">
              <IoSearchOutline className="w-6 h-6" />
            </button>
            <input
              className="peer h-full w-full outline-none text-sm bg-search_bg text-gray-700 pr-2"
              type="text"
              placeholder="Search "
            />
          </div>
        </form>
        <MainLinkComponent isSidebar={false} />
        <UtilityLinks isSidebar={false} />
        <button className=" md:hidden" onClick={() => openSidebar()}>
          <FaBars className="w-8 h-8" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
