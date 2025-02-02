import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import { useGlobalContext } from "../context";

const ProductsFilter = ({
  setAppliedFilters,
  setAppliedPriceRange,
  setIsOpenFilter,
  isOpenFilter,
}) => {
  // Temporary states for filters and price range before applying them
  const [selectedFilters, setSelectedFilters] = useState({});
  const [priceRange, setpriceRange] = useState({ from: "", to: "" });

  const { data, isLoading, isError } = useGlobalContext();

  const filters = [];

  if (isError) return <div>Is error</div>;
  if (isLoading || !data)
    return <div className="mt-[133px] text-3xl">Is loading...</div>;

  //Set categories filter from data.products
  const categories = Array.from(
    new Set(
      data.products.map((el) => el.brand).filter((brand) => brand !== undefined)
    )
  );
  const categoryFilter = {
    filterTitle: "Brand",
    value: categories.map((category) => ({
      name: category,
      id: `brand-${category.toLowerCase().replace(/\s+/g, "-")}`, //result =  brand-(category)
    })),
  };

  //Add categories to global Filters
  const updatedFilters = [categoryFilter, ...filters];

  return (
    <div
      className={`w-full h-full bg-white px-4 pt-4 pb-32 lg:pb-4 lg:relative fixed top-[96px] lg:top-0 left-0 transform transition-transform duration-300 lg:max-w-80 overflow-y-scroll ${
        isOpenFilter
          ? "-translate-x-0 lg:-translate-x-full"
          : "-translate-x-full lg:translate-x-0"
      }`}
    >
      {/* Close button for mobile view */}
      <div
        onClick={() => setIsOpenFilter(false)}
        className="pt-4 pb-8 lg:hidden "
      >
        <div className="flex items-center gap-4">
          <FaAngleLeft className="w-6 h-6" />
          <h1 className="text-3xl">Filters</h1>
        </div>
      </div>

      {/* Price Range Filter */}
      <details open className="mb-6">
        <summary className="flex items-center justify-between gap-8 mb-2 text-lg font-semibold list-none pb-[10px] border-b border-opacity-50 appearance-none cursor-pointer">
          <p>Price</p>
          <FaAngleDown />
        </summary>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="number"
            placeholder="From"
            value={priceRange.from}
            onChange={(e) =>
              setpriceRange((prev) => ({ ...prev, from: e.target.value }))
            }
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="To"
            value={priceRange.to}
            onChange={(e) =>
              setpriceRange((prev) => ({ ...prev, to: e.target.value }))
            }
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </details>

      {/* Dynamic Filters (e.g., Brand) */}
      {updatedFilters.map((filter) => (
        <details key={filter.filterTitle} open className="mb-6">
          <summary className="flex items-center justify-between gap-8 mb-2 text-lg font-semibold list-none pb-[10px] border-b border-opacity-50 appearance-none cursor-pointer">
            <p>{filter.filterTitle}</p>
            <FaAngleDown />
          </summary>
          <div className="mt-2 space-y-2 overflow-y-auto max-h-40">
            {filter.value.map((el) => (
              <div key={el.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={el.id}
                  className="text-blue-600 form-checkbox"
                  onChange={(e) =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      [el.id]: e.target.checked,
                    }))
                  }
                />
                <label htmlFor={el.id} className="text-gray-700">
                  {el.name}
                </label>
              </div>
            ))}
          </div>
        </details>
      ))}

      {/* Apply Filters Button */}
      <button
        className="w-full p-3 text-white bg-black rounded-lg lg:max-w-80"
        onClick={() => {
          setAppliedFilters(selectedFilters);
          setAppliedPriceRange(priceRange);
          setIsOpenFilter(false);
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default ProductsFilter;
