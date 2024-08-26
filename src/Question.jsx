import React from "react";
import question from "../src/assets/question.png";

const Question = () => {
  return (
    <div className="container mx-auto bg-[#ffeaaa] rounded-lg shadow-lg w-full p-6 mt-4 border">
      <div className="w-full flex md:gap-x-96">
        <div className="space-y-4">
          <h1 className="md:text-xl font-medium text-nowrap">
            Have a question about Tyres?
          </h1>
          <p className="text-slate-600 md:text-lg">
            Get an answer in 24 hours from our experts.
          </p>
          <input
            className="rounded-full md:w-[450px] w-full py-2 border border-yellow-600 px-4 focus:outline-none"
            placeholder="Ask or search your question"
          />
        </div>
        <div className="flex justify-center items-center">
          <img src={question} className="md:h-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Question;
