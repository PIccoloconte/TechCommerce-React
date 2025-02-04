import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MainLinkComponent, UtilityLinks } from "../utils/Links";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar, ChangeSearchBarValue } = useGlobalContext();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    ChangeSearchBarValue(input);
    navigate(`/ProductPage/${input}`);
  };
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="flex items-center justify-between gap-3 px-4 py-6 border-b-2 2xl:px-40 lg:py-4 md:gap-0">
        <Link to="/">
          <strong className="text-xl">Cyber</strong>
        </Link>
        <form
          onSubmit={HandleSubmit}
          className="rounded-lg bg-search_bg lg:max-w-96 lg:w-full "
        >
          <div className="relative flex items-center w-auto h-12 overflow-hidden rounded-lg">
            <button className="w-12 text-gray-300 place-items-center">
              <IoSearchOutline className="w-6 h-6" />
            </button>
            <input
              className="w-full h-full pr-2 text-sm text-gray-700 outline-none peer bg-search_bg"
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
