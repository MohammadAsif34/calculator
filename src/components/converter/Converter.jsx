import React from "react";
import KeyPadConverter from "./KeyPadConverter";
import { currencyKeys, curr } from "../../utils/converterUtils";

const Converter = () => {
  return (
    <div className="w-full h-full relative fade-in ">
      <div
        style={{ borderRadius: "50%" }}
        className="w-32 h-8 bg-green-300 absolute top-[-50px] right-[50px] -rotate-15 flex items-center justify-center text-xs text-red-500"
      >
        Under development
      </div>
      <div className="w-full h-[200px] py-4 relative flex flex-col gap-0.5">
        {/* currency from  */}
        <div className="w-full h-1/2 px-6 py-1.5 border-2 border-blue-100 rounded-md">
          <p className="text-gray-400">From</p>
          <div>
            <input
              type="number"
              className="max-w-3/5 h-10 px-2 text-2xl outline-none border border-gray-200 rounded-sm"
            />
            <select id={curr} className="mx-5 text-xl px-2">
              {curr.map((curr, idx) => {
                return (
                  <option className="w-[500px]" key={idx} value="">
                    {curr}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* currency to  */}
        <div className="w-full h-1/2 px-6 py-1.5 border-2 border-blue-100  rounded-md">
          <p className="text-gray-400">To</p>
          <div>
            <input
              type="number"
              className="max-w-3/5 h-10 px-2 text-2xl outline-none border border-gray-200 rounded-sm"
            />
            <select id={curr} className="mx-5 text-xl px-2">
              {curr.map((curr, idx) => {
                return (
                  <option className="w-[500px]" key={idx} value="">
                    {curr}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="w-14 h-14 absolute right-5 top-1/2 -translate-y-1/2 bg-white overflow-hidden">
          <div className="w-full h-full flex justify-center items-center text-xl text-blue-500 border-2 border-blue-200 rounded-full cursor-pointer hover:bg-blue-100 hover:border-blue-500 ">
            <i className="bi bi-arrow-left-right"></i>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100%-200px)] ">
        <KeyPadConverter />
      </div>
    </div>
  );
};

export default Converter;
