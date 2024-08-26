import React from "react";

const PaymentMode = () => {
  return (
    <div className="container mx-auto bg-white rounded-lg shadow-lg w-full p-6 mt-4 border">
      <h1 className="text-start text-xl font-medium">Payment Mode</h1>
      <div className="flex gap-x-8 font-medium mt-4 flex-nowrap w-full">
        <div className="space-y-2">
          <p className="flex space-x-1 flex-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Deposit to Account</span>
          </p>
          <p className="flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Credit Card/Debit Card</span>
          </p>
          <p className="flex space-x-1 flex-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Wallets (PayTM/PhonePe/Amazon etc.)</span>
          </p>
        </div>
        <div className="space-y-2 flex flex-col flex-nowrap">
          <p className="flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Net Banking</span>
          </p>
          <p className="flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>UPI</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;
