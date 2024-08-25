import React from "react";

const data = [
  "MRF",
  "CEAT",
  "GoodYear",
  "Apollo",
  "Bridgestone",
  "JK Tyre",
  "Michelin",
  "Birla",
];

const Deals = () => {
  return (
    <div className="container mx-auto bg-white rounded-lg shadow-lg w-full p-6 mt-4 border">
      <h1 className="text-start text-2xl font-medium">Deals in</h1>
      <div className="p-6 flex items-center space-x-4 overflow-x-auto scrollbar-hide w-full">
        {data.map((item) => (
          <div className="w-[200px] bg-white rounded-md shadow-lg p-4 space-y-2 border  flex-shrink-0 flex flex-col justify-center items-center">
            <img src="" alt="logo" />
            <h4 className="text-gray-500">{item}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
