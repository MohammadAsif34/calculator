import React, { useContext, useEffect, useState } from "react";
import KeyPad from "./KeyPad";
import CalcContext from "../../calcContext/CalcContext";

const Home = () => {
  const {
    exp,
    op,
    val,
    val1,
    val2,
    mode,
    setMode,
    theme,
    setTheme,
    result,
    calc,
  } = useContext(CalcContext);
  return (
    <div
      style={{
        backgroundColor: " #f7f7f7",
        background:
          "radial-gradient(circle, rgba(247, 247, 247, 1) 25%, rgba(220, 232, 247, 1) 100%)",
      }}
      className="w-full h-screen flex justify-center relative items-center bg-blue-50"
    >
      <div className="w-full h-5 px-20 absolute left-0 bottom-[5px] flex justify-between items-center text-gray-500 text-xs font-monospaced">
        <p>&copy;2025 | All rights reserved. </p>
        <p>Developed by MohammadAsif34</p>
      </div>

      {/* <div className="absolute top-4 left-4 text-gray-500">
        val: {val} <br />
        val1: {val1} <br />
        val2: {val2} <br />
        op: {op} <br />
        result: {result} <br />
        calc: {calc.value} <br />
        {calc && <p className="w-5 h-5 bg-green-600"></p>}
      </div> */}
      <div className="w-[500px] h-[550px] py-4 px-6 flex flex-col  border border-gray-100 rounded-xl shadow-xl bg-white">
        <div className="w-full flex items-center gap-4 text-gray-400 text-sm font-semibold ">
          <div className="w-6 mr-4">
            <img src="/logo.png" alt="" />
          </div>
          <button
            className={`uppercase border-b-2 cursor-pointer ${
              mode === "converter"
                ? " border-blue-400 text-blue-400"
                : "hover:text-black border-transparent"
            } `}
            onClick={() => setMode("converter")}
          >
            Converter
          </button>
          <button
            className={`uppercase border-b-2 cursor-pointer  ${
              mode === "calculator"
                ? " border-blue-400 text-blue-400"
                : "hover:text-black border-transparent"
            } `}
            onClick={() => setMode("calculator")}
          >
            Calculator
          </button>
          <button
            className="flex-1 text-right cursor-pointer "
            onClick={() => setTheme(!theme)}
          >
            <i className={`"bi bi-${theme ? "moon" : "moon-fill"}`}></i>
          </button>
        </div>

        {/* tags  */}
        <div className=" mt-3 text-3xl capitalize">{}</div>

        {/* screen  */}
        <div className="w-full h-[200px] my-3 flex flex-col justify-center items-center text-2xl border border-blue-300 rounded-lg">
          {/* <input
            type="text"
            className="w-full h-10 px-3 text-right outline-none "
            disabled
            placeholder=" "
          /> */}
          <input
            type="text"
            className="w-full h-10 px-3 text-right outline-none "
            placeholder="0"
            value={exp ?? ""}
            readOnly
          />
          <input
            type="text"
            className="w-full h-10 px-3 text-right outline-none "
            value={result ?? ""}
            disabled
            readOnly
          />
        </div>
        {/* input  */}
        <div className="w-full h-full my-3">
          <KeyPad />
        </div>
      </div>
    </div>
  );
};

export default Home;
