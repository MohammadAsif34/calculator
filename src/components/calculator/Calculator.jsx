import React, { useContext } from "react";
import KeyPadCalculator from "./KeyPadCalculator";
import CalcContext from "../../calcContext/CalcContext";

const Calculator = () => {
  const { exp, result, theme } = useContext(CalcContext);
  return (
    <div className="w-full h-full flex flex-col fade-in">
      {/* screen  */}
      <div
        className={`w-full h-[200px] my-4 flex flex-col justify-center items-center text-2xl border-2 border-blue-200 rounded-lg
        ${theme ? "dark:bg-[#212327] dark:text-gray-300 border-gray-800" : ""}`}
      >
        {/* <input
            type="text"
            className="w-full h-10 px-3 text-right outline-none "
            disabled
            placeholder=" "
          /> */}
        <input
          type="text"
          className={`w-full h-10 px-3 text-right outline-none `}
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
      <div className="w-full h-full">
        <KeyPadCalculator />
      </div>
    </div>
  );
};

export default Calculator;
