import React from "react";
import apollo from "../assets/apollo.png";

const ProductCard = () => {
  return (
    <div className="border rounded-lg p-4 max-w-sm shadow-md">
      <div className="flex items-center justify-between">
        <img
          src={apollo}
          alt="Apollo Logo"
          className="h-8 mix-blend-multiply"
        />
        <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
          5 Year Warranty
        </span>
      </div>
      <h2 className="text-lg font-bold mt-2">AMAZER 4G LIFE</h2>
      <p className="text-sm text-gray-600">145/80 R12</p>
      <div className="flex items-center mt-2">
        <div className="flex items-center bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          <span>4</span>
        </div>
        <p className="ml-2 text-sm text-gray-600">320 Reviews</p>
      </div>
      <p className="text-2xl font-bold text-gray-800 mt-2">₹ 3,136</p>
      <p className="text-green-500 text-sm font-semibold">Offer available</p>
      <p className="text-sm text-gray-600 mt-1">Tube Type</p>
      <img src={apollo} alt="Tyre" className="mt-4" />
    </div>
  );
};

export default ProductCard;
