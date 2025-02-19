import React from "react";
import { Link } from "react-router-dom";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiBloggerLine } from "react-icons/ri";
import { RiContactsBook3Line } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { useGlobalContext } from "../context";

const mainLinks = [
  {
    url: "/",
    text: "Home",
    icon: <IoHomeOutline className="w-8 h-8"></IoHomeOutline>,
  },
  {
    url: "/About",
    text: "About",
    icon: <RiTeamLine className="w-8 h-8"></RiTeamLine>,
  },
  {
    url: "/ContactUs",
    text: "Contact us",
    icon: <RiContactsBook3Line className="w-8 h-8"></RiContactsBook3Line>,
  },
  {
    url: "/BLog",
    text: "Blog",
    icon: <RiBloggerLine className="w-8 h-8"></RiBloggerLine>,
  },
];

const MainLinkComponent = ({ isSidebar }) => {
  return (
    <ul
      className={`${
        isSidebar ? "flex flex-col gap-4 pl-3 text-xl" : "hidden md:flex"
      }`}
    >
      {mainLinks.map((link) => {
        return (
          <Link
            key={link.text}
            to={link.url}
            className="flex items-center gap-3 text-xl md:mr-4 md:last:mr-0 lg:mr-12 lg:last:mr-0"
          >
            {isSidebar && link.icon}
            {link.text}
          </Link>
        );
      })}
    </ul>
  );
};

const Links = [
  {
    url: "/Whishlist", //Whishlist
    title: "Whishlist",
    icon: <CiHeart className="w-8 h-8" />,
  },
  {
    url: "/Cart",
    title: "Cart",
    icon: <PiShoppingCartLight className="w-8 h-8" />,
  },
  {
    url: "/LoginManager", //Da cambiare con il profilo poi
    title: "Profile",
    icon: <CiUser className="w-8 h-8" />,
  },
];

const UtilityLinks = ({ isSidebar }) => {
  const { cartItemIcon, whishlistItemIcon } = useGlobalContext();
  return (
    <ul
      className={`${
        isSidebar
          ? "pl-3 mt-4 flex flex-col gap-4"
          : " hidden md:justify-between md:flex"
      } `}
    >
      {Links.map((link) => {
        return (
          <Link
            to={link.url}
            key={link.title}
            className="relative flex items-center gap-3 text-xl md:mr-2 md:last:mr-0 lg:mr-6 lg:last:mr-0"
          >
            {link.icon}
            {isSidebar && link.title}
            {link.title === "Cart" ? (
              <small className="absolute -top-1 left-2 md:right-1 bg-red-700 bg-opacity-90 w-5 h-5 rounded-[50%] flex justify-center items-center">
                {cartItemIcon}
              </small>
            ) : link.title === "Whishlist" ? (
              <small className="absolute -top-1 left-[6px] md:right-1 bg-red-700 bg-opacity-90 w-5 h-5 rounded-[50%] flex justify-center items-center">
                {whishlistItemIcon}
              </small>
            ) : (
              <></>
            )}
          </Link>
        );
      })}
    </ul>
  );
};

const SocialLink = [
  {
    url: "https://x.com/",
    icon: <RiTwitterXFill />,
  },
  {
    url: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    url: "https://www.tiktok.com/",
    icon: <FaTiktok />,
  },
  {
    url: "https://www.instagram.com/",
    icon: <BiLogoInstagramAlt />,
  },
];

const SocialComponent = () => {
  return (
    <ul className="flex justify-between m-1 mx-auto text-2xl text-white w-44 xl:ml-0">
      {SocialLink.map((el) => {
        return (
          <li key={el.url}>
            <a href={el.url} alt={el.url}>
              {el.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { MainLinkComponent, UtilityLinks, SocialComponent, SocialLink };
