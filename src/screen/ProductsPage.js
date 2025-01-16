import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";

import CardProduct from "../components/CardProduct";

const filters = [
  {
    filterTitle: "Brand",
    value: [
      { name: "Apple", id: "brand-apple" },
      { name: "Samsung", id: "brand-samsung" },
      { name: "Xiaomi", id: "brand-xiaomi" },
    ],
  },
  {
    filterTitle: "Built-in memory",
    value: [
      { name: "16GB", id: "memory-16" },
      { name: "32GB", id: "memory-32" },
      { name: "64GB", id: "memory-64" },
    ],
  },
  {
    filterTitle: "Protection class",
    value: [
      { name: "IP67", id: "protection-67" },
      { name: "IP68", id: "protection-68" },
    ],
  },
  {
    filterTitle: "Screen digital",
    value: [
      { name: "5.5", id: "screen-5.5" },
      { name: "6.1", id: "screen-6.1" },
      { name: "6.5", id: "screen-6.5" },
    ],
  },
  {
    filterTitle: "Screen type",
    value: [
      { name: "LCD", id: "screen-LCD" },
      { name: "OLED", id: "screen-OLED" },
      { name: "AMOLED", id: "screen-AMOLED" },
    ],
  },
  {
    filterTitle: "Battery capacity",
    value: [
      { name: "3000mAh", id: "Battery-3000" },
      { name: "4000mAh", id: "Battery-4000" },
      { name: "5000mAh", id: "Battery-5000" },
    ],
  },
];

const ProductsPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <div className="mx-4 mb-11 mt-[142px] lg:mt-[126px] lg:flex lg:flex-row-reverse lg:justify-between">
      <div className="lg:w-full lg:mr-40">
        <div className="flex flex-col gap-11 lg:flex-row-reverse lg:justify-between lg:items-center lg:pb-6">
          <div className="flex justify-between gap-4 text-center lg:block">
            <button
              onClick={() => setIsOpenFilter(true)}
              className="flex-1 p-4 border rounded-lg lg:hidden max-w-52 border-spacing-3"
            >
              <div className="flex items-center justify-between">
                <p>Filters</p>
                <BsSliders></BsSliders>
              </div>
            </button>
            <details className="relative flex-1 p-4 border rounded-lg max-w-52 border-spacing-3">
              <summary className="flex items-center justify-between gap-8 list-none appearance-none ">
                <p>By rating</p>
                <FaAngleDown></FaAngleDown>
              </summary>
              <div className="absolute left-0 z-10 w-full text-left border rounded-lg top-full border-spacing-3 ">
                <p className="p-2 border-b-2 ">Best rating</p>
                <p className="p-2 ">Worst rating</p>
              </div>
            </details>
          </div>
          <p className="mb-6 lg:m-0">
            Products result : <strong>85</strong>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center">
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
        </div>
      </div>

      <div
        className={`w-full h-full bg-white px-4 pt-4 pb-32 lg:pb-4 lg:relative fixed top-[96px] lg:top-0 left-0 transform transition-transform duration-300 lg:max-w-80 overflow-y-scroll ${
          isOpenFilter
            ? "-translate-x-0 lg:-translate-x-full"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div
          onClick={() => setIsOpenFilter(false)}
          className="pt-4 pb-8 lg:hidden "
        >
          <div className="flex items-center gap-4">
            <FaAngleLeft className="w-6 h-6"></FaAngleLeft>
            <h1 className="text-3xl">Filters</h1>
          </div>
        </div>
        <details open className="mb-6">
          <summary className="flex items-center justify-between gap-8  mb-2 text-lg font-semibold list-none pb-[10px] border-b border-opacity-50 appearance-none cursor-pointer">
            <p>Price</p>
            <FaAngleDown></FaAngleDown>
          </summary>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="number"
              placeholder="From"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="To"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </details>
        <>
          {filters.map((filter) => {
            return (
              <details key={filter.filterTitle} open className="mb-6">
                <summary className="flex items-center justify-between gap-8  mb-2 text-lg font-semibold list-none pb-[10px] border-b border-opacity-50 appearance-none cursor-pointer">
                  <p>{filter.filterTitle}</p>
                  <FaAngleDown></FaAngleDown>
                </summary>
                <div className="mt-2 space-y-2 overflow-y-auto max-h-40">
                  {filter.value.map((el) => {
                    return (
                      <div key={el.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={el.id}
                          className="text-blue-600 form-checkbox"
                        />
                        <label htmlFor={el.id} className="text-gray-700">
                          {el.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </>

        <button className="w-full p-3 text-white bg-black rounded-lg lg:max-w-80">
          Apply
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
