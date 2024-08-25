import React from "react";
import storeImage from "../src/assets/store.jpg";
import ReviewCard from "./components/ReviewCard";

const MainCard = () => {
  return (
    <div className="container mx-auto bg-white rounded-lg shadow-lg w-full p-6 mt-4 border">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-2xl font-medium">
            SHREE HEMKUNT TYRES AND <br />
            SERVICES
          </h1>
          <div className="mt-4 flex space-x-3">
            <h1 className="bg-green-600 w-fit text-white rounded px-2 text-sm items-center flex">
              4.9
            </h1>
            <div className="flex">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <div>
              <span className="underline font-medium">2278 Reviews</span>
            </div>
            <div>
              <span className="bg-gray-100 p-1 rounded border border-gray-300 text-gray-400 cursor-pointer hover:bg-gray-300 hover:text-gray-600 duration-300 hover:border-gray-400 text-sm">
                Rate
              </span>
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-gray-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <h1 className="text-gray-700">
              PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD,
              <br /> AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh,
              <br /> 201014
            </h1>
          </div>
          <div className="flex space-x-3 mt-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-slate-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <h1 className="text-slate-500">
              Open - Monday to Sunday - 10:00AM to 8:00PM
            </h1>
          </div>
        </div>
        <div className="flex space-x-3">
          <div>
            <div className="flex space-x-1">
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
              <span className="text-green-600">Verified</span>
            </div>
          </div>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide mt-3 cursor-pointer">
            <img
              className="h-[190px] w-auto flex-shrink-0 rounded"
              src={storeImage}
            />
            <img
              className="h-[190px] w-auto flex-shrink-0 rounded"
              src={storeImage}
            />
            <img
              className="h-[190px] w-auto flex-shrink-0 rounded"
              src={storeImage}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/CEAT%20Shoppe,%20Shree%20Hemkunt%20Tyres%20And%20Services/@28.6426711,77.3789929,15z/data=!4m2!3m1!1s0x0:0xc268cb9ed2106c69?sa=X&ved=2ahUKEwizo8LqydjzAhXRSH0KHQyoDsMQ_BJ6BAhrEAM"
          className="border border-red-600 px-8 rounded  py-2 text-red-600 hover:bg-red-600 hover:text-white duration-300 font-medium"
        >
          Get Direction
        </a>
      </div>
      <div className="mt-6">
        <h1 className="font-medium">22718 Google Review</h1>
        <div className="cursor-pointer mt-4 flex space-x-5 overflow-x-auto flex-shrink-0 scrollbar-hide">
          {[...Array(8)].map((_, index) => (
            <ReviewCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
