import React from "react";
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
  },
  {
    title: "Watches",
    icon: <BsSmartwatch />,
  },
  {
    title: "Headphones",
    icon: <CiHeadphones />,
  },
  {
    title: "Laptop",
    icon: <PiLaptopLight />,
  },
  {
    title: "Tablet",
    icon: <LuTablet />,
  },
  {
    title: "Mobile-accessories",
    icon: <CgSmartphoneChip />,
  },
];

const Category = () => {
  return (
    <div className="px-4 py-16 lg:px-40">
      <h3 className="text-lg font-medium mb-12">Browse By Category</h3>
      <div className="grid grid-rows-3 grid-cols-2 lg:grid-rows-1 lg:grid-cols-6 place-items-center gap-4">
        {categoryList.map((el) => {
          return (
            <div
              key={el.title}
              className="flex justify-center items-center flex-col rounded-2xl bg-product_bg w-40 h-32 gap-2"
            >
              <div className="flex justify-center text-5xl">{el.icon}</div>
              <p>{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
