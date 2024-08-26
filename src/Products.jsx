import React from "react";
import ProductCard from "./components/ProductCard";
import BreadCrumb from "./components/BreadCrumb";

const Products = () => {
  return (
    <div className="mt-6 container md:pl-8 mx-auto">
      <h1 className="text-start text-xl font-medium p-4">
        Tyres sold by this Dealer
      </h1>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[...Array(10)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <BreadCrumb />
    </div>
  );
};

export default Products;
