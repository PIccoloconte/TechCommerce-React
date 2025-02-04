import React, { useState, useEffect } from "react";
import { BsSliders } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import { useGlobalContext } from "../context";
import ProductsFilter from "../components/ProductsFilter";
import { FilterAndSortProducts } from "../utils/FilterAndSortProducts";
import Spinner from "../components/Spinner";

const ProductsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, ChangeGlobalURL, searchQuery } =
    useGlobalContext();

  //Filters
  const [appliedFilters, setAppliedFilters] = useState({});
  const [appliedPriceRange, setAppliedPriceRange] = useState({
    from: "",
    to: "",
  });
  // Sort by highest or lowest price
  const [sortBy, setSortBy] = useState(null);
  //Name of sortBy
  const [sortLabel, setSortLabel] = useState("By Price");
  //Open and close SortBy
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  //Dynamically change global URL based on category or search
  useEffect(() => {
    const newURL = searchQuery ? `/search?q=${searchQuery}` : `/category/${id}`;
    ChangeGlobalURL(newURL);
  }, [id, searchQuery]);

  if (isError) return <div>Is error</div>;

  //Show Spinner on loading
  if (isLoading || !data)
    return (
      <div className="mt-[53px]">
        <Spinner />
      </div>
    );

  //Filter and sort products based on the filters and sorting you select
  const filteredProducts = FilterAndSortProducts(
    data.products,
    appliedFilters,
    appliedPriceRange,
    sortBy
  );

  return (
    <div className="mx-4 mb-11 mt-[142px] lg:mt-[126px] lg:flex lg:flex-row-reverse lg:justify-between">
      <div className="lg:w-full lg:mr-40">
        <div className="flex flex-col gap-11 lg:flex-row-reverse lg:justify-between lg:items-center lg:pb-6">
          <div className="flex justify-between gap-4 text-center lg:block">
            {/*Filter button , only mobile*/}
            <button
              className="flex-1 p-4 border rounded-lg lg:hidden max-w-52 border-spacing-3"
              onClick={() => setIsOpenFilter(true)}
            >
              <div className="flex items-center justify-between">
                <p>Filters</p>
                <BsSliders />
              </div>
            </button>

            {/* SortBy Menu*/}
            <details
              open={isSortMenuOpen}
              className="relative flex-1 p-4 border rounded-lg max-w-52 border-spacing-3 lg:w-[208px]"
              onToggle={(e) => setIsSortMenuOpen(e.target.open)}
            >
              <summary className="flex items-center justify-between gap-8 list-none appearance-none ">
                <p>{sortLabel}</p>
                <FaAngleDown />
              </summary>
              <div className="absolute left-0 z-10 w-full text-left border rounded-lg top-full border-spacing-3 ">
                <p
                  className="z-10 p-2 text-white bg-black border-b rounded-lg"
                  onClick={() => {
                    setSortBy("lowest");
                    setSortLabel("From lowest");
                    setIsSortMenuOpen(false);
                  }}
                >
                  From lowest
                </p>
                <p
                  className="z-10 p-2 text-white bg-black rounded-lg"
                  onClick={() => {
                    setSortBy("highest");
                    setSortLabel("From highest");
                    setIsSortMenuOpen(false);
                  }}
                >
                  From highest
                </p>
              </div>
            </details>
          </div>
          <p>
            Products result : <strong>{filteredProducts.length}</strong>
          </p>
        </div>
        {/*Display products found*/}
        <div className="grid grid-cols-2 gap-4 pb-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center">
          {filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>

      <ProductsFilter
        setAppliedFilters={setAppliedFilters}
        setAppliedPriceRange={setAppliedPriceRange}
        setIsOpenFilter={setIsOpenFilter}
        isOpenFilter={isOpenFilter}
      />
    </div>
  );
};

export default ProductsPage;
