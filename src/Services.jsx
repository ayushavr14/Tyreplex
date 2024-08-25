import React from "react";
import Alignment from "../src/assets/wheel-alignment.png";
import Balancing from "../src/assets/wheel-balancing.png";

const data = [
  {
    img: Balancing,
    text: "Wheel Alignment",
    button: "Book Now",
  },
  {
    img: Alignment,
    text: "Wheel Balancing",
    button: "Book Now",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto bg-white rounded-lg shadow-lg w-full p-6 mt-4 border">
      <h1 className="text-start text-2xl font-medium">
        Services offered by this dealer
      </h1>
      <div className="p-6 flex items-center space-x-4">
        {data.map((item) => (
          <div className="w-[280px] bg-white rounded-md shadow-lg p-4 text-center space-y-2 border flex flex-col justify-center items-center">
            <img className="flex-shrink-0 h-[100px]" src={item.img} />
            <h4 className="font-medium">{item.text}</h4>
            <button className="bg-red-600 rounde text-white px-4 py-1.5 rounded">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
