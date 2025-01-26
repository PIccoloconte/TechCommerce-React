import React, { useState, useEffect } from "react";
import { BsSliders } from "react-icons/bs";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import { useGlobalContext } from "../context";

const filters = [];

const ProductsPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const { id } = useParams();

  //Checkbox filter state
  const [tempFilters, setTempFilters] = useState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  //Price filter state number input

  const [tempPriceRange, setTempPriceRange] = useState({ from: "", to: "" });
  const [appliedPriceRange, setAppliedPriceRange] = useState({
    from: "",
    to: "",
  });

  //Lowest or highest price filter
  const [sortOrder, setSortOrder] = useState(null);
  const [orderName, setOrederName] = useState("By Price");
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  const { data, isLoading, isError, ChangeGlobalURL, searchQuery } =
    useGlobalContext();

  useEffect(() => {
    const newURL = searchQuery
      ? `/search?q=${searchQuery}` // Se c'è un valore di ricerca
      : `/category/${id}`; // Altrimenti usa l'ID della categoria

    ChangeGlobalURL(newURL);
  }, [id, searchQuery]); // Ricalcola quando `id` o `searchQuery` cambiano

  if (isError) {
    return <div>Is error</div>;
  }
  if (isLoading || !data) {
    return <div className="mt-[133px] text-3xl">Is loading...</div>;
  }

  //Set categories from data.products
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

  const filteredProducts = [...data.products]
    .filter((product) => {
      // Filtra by category
      const matchesCategory = Object.keys(appliedFilters).some(
        (key) =>
          appliedFilters[key] &&
          product.brand.toLowerCase().includes(key.split("-")[1])
      );

      // Filter by input price
      const matchesPrice =
        (!appliedPriceRange.from ||
          product.price >= Number(appliedPriceRange.from)) &&
        (!appliedPriceRange.to ||
          product.price <= Number(appliedPriceRange.to));

      // Return filtered products
      return (
        (matchesCategory ||
          Object.values(appliedFilters).every((val) => !val)) &&
        matchesPrice
      );
    })
    .sort((a, b) => {
      if (sortOrder === "lowest") {
        return a.price - b.price;
      }
      if (sortOrder === "highest") {
        return b.price - a.price;
      }
      return 0; //base state with no sort
    });

  const updatedFilters = [categoryFilter, ...filters];
  //const updatedFilters = [...filters];
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
            <details
              open={isOpenOrder}
              className="relative flex-1 p-4 border rounded-lg max-w-52 border-spacing-3 lg:w-[208px]"
              onToggle={(e) => setIsOpenOrder(e.target.open)}
            >
              <summary className="flex items-center justify-between gap-8 list-none appearance-none ">
                <p>{orderName}</p>
                <FaAngleDown></FaAngleDown>
              </summary>
              <div className="absolute left-0 z-10 w-full text-left border rounded-lg top-full border-spacing-3 ">
                <p
                  className="z-10 p-2 text-white bg-black border-b rounded-lg"
                  onClick={() => {
                    setSortOrder("lowest");
                    setOrederName("From lowest");
                    setIsOpenOrder(false);
                  }}
                >
                  From lowest
                </p>
                <p
                  className="z-10 p-2 text-white bg-black rounded-lg"
                  onClick={() => {
                    setSortOrder("highest");
                    setOrederName("From highest");
                    setIsOpenOrder(false);
                  }}
                >
                  From highest
                </p>
              </div>
            </details>
          </div>
          <p className="mb-6 lg:m-0">
            Products result : <strong>{filteredProducts.length}</strong>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center">
          {filteredProducts.map((product) => {
            return (
              <CardProduct key={product.id} product={product}></CardProduct>
            );
          })}
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

        {/* Lowest or highest price filter */}
        <details open className="mb-6">
          <summary className="flex items-center justify-between gap-8  mb-2 text-lg font-semibold list-none pb-[10px] border-b border-opacity-50 appearance-none cursor-pointer">
            <p>Price</p>
            <FaAngleDown></FaAngleDown>
          </summary>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="number"
              placeholder="From"
              value={tempPriceRange.from}
              onChange={(e) =>
                setTempPriceRange((prev) => ({ ...prev, from: e.target.value }))
              }
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="To"
              value={tempPriceRange.to}
              onChange={(e) =>
                setTempPriceRange((prev) => ({ ...prev, to: e.target.value }))
              }
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </details>
        <>
          {updatedFilters.map((filter) => {
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
                          onChange={(e) => {
                            setTempFilters((prev) => ({
                              ...prev,
                              [el.id]: e.target.checked,
                            }));
                          }}
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

        <button
          className="w-full p-3 text-white bg-black rounded-lg lg:max-w-80"
          onClick={() => {
            setAppliedFilters(tempFilters);
            setAppliedPriceRange(tempPriceRange);
            setIsOpenFilter(false);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
