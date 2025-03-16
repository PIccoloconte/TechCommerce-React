import React from "react";
import { useNavigate } from "react-router-dom";
import { SlScreenSmartphone } from "react-icons/sl";
import { CiHeadphones } from "react-icons/ci";
import { PiLaptopLight } from "react-icons/pi";
import { CgSmartphoneChip } from "react-icons/cg";
import { BsSmartwatch } from "react-icons/bs";
import { LuTablet } from "react-icons/lu";

const categoryList = [
  {
    title: "Phones",
    icon: <SlScreenSmartphone />,
    category: "smartphones",
  },
  {
    title: "Watches",
    icon: <BsSmartwatch />,
    category: "mens-watches",
  },
  {
    title: "Headphones",
    icon: <CiHeadphones />,
    category: "mobile-accessories",
  },
  {
    title: "Laptop",
    icon: <PiLaptopLight />,
    category: "laptops",
  },
  {
    title: "Tablet",
    icon: <LuTablet />,
    category: "tablets",
  },
  {
    title: "Mobile-accessories",
    icon: <CgSmartphoneChip />,
    category: "mobile-accessories",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-16 lg:px-40">
      <h3 className="mb-12 text-lg font-medium">Browse By Category</h3>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:grid-rows-1 lg:grid-cols-6 place-items-center">
        {categoryList.map((el) => {
          return (
            <button
              onClick={() => navigate(`/ProductPage/${el.category}`)}
              key={el.title}
              className="flex flex-col items-center justify-center w-40 h-32 gap-2 rounded-2xl bg-product_bg"
            >
              <div className="flex justify-center text-5xl">{el.icon}</div>
              <p>{el.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
