export const FilterAndSortProducts = (
  products,
  filters,
  priceRange,
  sortOrder
) => {
  return [...products]
    .filter((product) => {
      const matchesCategory = Object.keys(filters).some(
        (key) =>
          filters[key] &&
          product.brand.toLowerCase().includes(key.split("-")[1])
      );

      const matchesPrice =
        (!priceRange.from || product.price >= Number(priceRange.from)) &&
        (!priceRange.to || product.price <= Number(priceRange.to));

      return (
        (matchesCategory || Object.values(filters).every((val) => !val)) &&
        matchesPrice
      );
    })
    .sort((a, b) => {
      if (sortOrder === "lowest") return a.price - b.price;
      if (sortOrder === "highest") return b.price - a.price;
      return 0;
    });
};
