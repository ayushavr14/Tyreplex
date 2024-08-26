import React from "react";
import ReviewCard from "./components/ReviewCard";
import { MainCardData } from "./data/main-card";

const MainCard = () => {
  return (
    <div className="container mx-auto bg-white rounded-lg shadow-lg w-full p-4 sm:p-6 mt-4 border">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <h1
            className="text-xl sm:text-2xl font-medium"
            dangerouslySetInnerHTML={{ __html: MainCardData[0].name }}
          ></h1>
          <div className="mt-4 flex flex-wrap space-x-3">
            <h1 className="bg-green-600 w-fit text-white rounded px-2 text-xs sm:text-sm items-center flex">
              {MainCardData[0].rating}
            </h1>
            <div className="flex">
              <span className="text-yellow-400 text-lg sm:text-xl">
                {MainCardData[0].stars}
              </span>
            </div>
            <div>
              <span className="underline font-medium text-sm sm:text-base">
                {MainCardData[0].reviews} Reviews
              </span>
            </div>
            <div>
              <span className="bg-gray-100 p-1 rounded border border-gray-300 text-gray-400 cursor-pointer hover:bg-gray-300 hover:text-gray-600 duration-300 hover:border-gray-400 text-xs sm:text-sm">
                Rate
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <h1
              className="text-gray-700 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: MainCardData[0].address }}
            ></h1>
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <h1 className="text-slate-500 text-sm sm:text-base">
              {MainCardData[0].timings}
            </h1>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-3">
          <div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              <span className="text-green-600 text-xs sm:text-sm">
                Verified
              </span>
            </div>
          </div>
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide mt-3 cursor-pointer">
            <img
              className="h-40 sm:h-[190px] w-auto flex-shrink-0 rounded"
              src={MainCardData[0].images}
            />
            <img
              className="h-40 sm:h-[190px] w-auto flex-shrink-0 rounded"
              src={MainCardData[0].images}
            />
            <img
              className="h-40 sm:h-[190px] w-auto flex-shrink-0 rounded"
              src={MainCardData[0].images}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <a
          target="_blank"
          href={MainCardData[0].direction}
          className="border border-red-600 px-6 sm:px-8 rounded py-2 text-red-600 hover:bg-red-600 hover:text-white duration-300 font-medium text-sm sm:text-base"
        >
          Get Direction
        </a>
      </div>
      <div className="mt-6">
        <h1 className="font-medium text-sm sm:text-base">
          22718 Google Review
        </h1>
        <div className="cursor-pointer mt-4 flex space-x-4 overflow-x-auto scrollbar-hide">
          {[...Array(8)].map((_, index) => (
            <ReviewCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
