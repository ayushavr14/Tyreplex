import React from "react";
import avatar from "../assets/avatar.jpg";

const ReviewCard = () => {
  return (
    <div className="rounded border bg-white p-4 w-[300px] flex-shrink-0 scrollbar-hide">
      <div className="flex items-center space-x-2">
        <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
        <h1 className="font-medium">Md Nasir</h1>
      </div>
      <p className="text-gray-600 mt-3 line-clamp-3">
        Excellent service from start to finish. 100% satisfaction with the job,
        professionalism, and overall service.
      </p>
    </div>
  );
};

export default ReviewCard;
