import React, { useContext } from "react";
import CalcContext from "../calcContext/CalcContext";

const Header = () => {
  const { mode, setMode, theme, setTheme } = useContext(CalcContext);
  // const [mode, setMode] = React.useState("converter");
  // const [theme, setTheme] = React.useState(true);
  return (
    <>
      <div className="w-full flex items-center gap-4 text-gray-400 text-xs font-semibold ">
        <div className="w-8 mr-4 bg-white rounded-sm p-[1px]">
          <img src="/logo1.png" alt="" />
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
          className="flex-1 text-right cursor-pointer text-xl "
          onClick={() => setTheme(!theme)}
        >
          <i
            className={`"bi bi-${theme ? "moon-fill text-blue-500" : "moon"}`}
          ></i>
        </button>
      </div>
      <div className=" mt-3 text-2xl capitalize font-semibold font-mono fade-in text:fade-in">
        {mode}
      </div>
    </>
  );
};

export default Header;
