import React from "react";

const Alert = () => {
  return (
    <section className="flex items-center justify-center mx-3 mt-20 mb-8">
      <div
        className="flex items-center bg-white shadow  rounded-md mt-6 px-2 mx-8"
        style="width: 24rem;"
      >
        <div className="mr-6 bg-green-500 rounded px-4 py-2  text-center -ml-3">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-white"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <h2 className="text-green-500 text-2xl font-bold mr-2 ">Success</h2>
          <p className="text-sm text-gray-700">I Am An Alert</p>
        </div>
        <div className="flex justify-end flex-1">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-red-600"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Alert;
