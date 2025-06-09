import React from "react";
import { keys } from "../../utils/converterUtils";

const KeyPadConverter = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-1.5 text-gray-600 ">
      {keys.map((keys, idx) => {
        return (
          <button
            key={idx}
            className="text-xl border border-gray-200 rounded-md cursor-pointer hover:border-blue-300 hover:bg-blue-50"
          >
            {keys.label}
          </button>
        );
      })}
      <button className="text-xl text-blue-500 border-2 border-blue-200 rounded-md bg-blue-50 cursor-pointer hover:border-blue-300 hover:bg-blue-100">
        <i className="bi bi-arrow-return-left"></i>
      </button>
    </div>
  );
};

export default KeyPadConverter;
