import React from "react";
import apollo from "../assets/apollo.png";
import apolloTyre from "../assets/apollo-tyre.png";

const ProductCard = () => {
  return (
    <div className="border rounded-lg max-w-sm shadow-md bg-white mt-4 overflow-hidden cursor-pointer flex-shrink-0 hover:shadow-xl">
      <div className="flex justify-between bg-white z-20">
        <div className="p-4">
          <img src={apollo} alt="logo" className="h-6" />
          <h4 className="uppercase mt-1">AMAZER 4G LIFE</h4>
          <h6 className="mt-4 text-slate-500">145/80 R12</h6>
          <div className="mt-4 flex space-x-2">
            <span className="bg-green-500 text-white rounded p-0.5">★4</span>
            <span className="text-slate-400">320 Reviews</span>
          </div>
          <p className="text-green-500 text-sm mt-4">Offer available</p>
          <p className="mt-4 text-slate-400">Tube Type</p>
        </div>
        <div className="flex gap-x-1 bg-[#ffca28]/20 h-fit rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
          <span>5 Year Warranty</span>
        </div>
      </div>
      <div className="flex justify-end relative -right-[70px] -mt-44 -bottom-[33px] -mb-2">
        <img className="w-[180px]" src={apolloTyre} alt="tyre" />
      </div>
    </div>
  );
};

export default ProductCard;
