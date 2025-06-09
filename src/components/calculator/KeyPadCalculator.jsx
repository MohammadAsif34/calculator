import React, { use, useContext, useEffect, useRef, useState } from "react";
import CalcContext from "../../calcContext/CalcContext";
import { keys, nums, operators, compute } from "../../utils/function";

const KeyPadCalculator = () => {
  const sign = useRef("");

  const {
    setExp,
    setOp,
    val,
    setVal,
    val1,
    setVal1,
    val2,
    setVal2,
    setResult,
    calc,
    setCalc,
    theme,
  } = useContext(CalcContext);

  useEffect(() => {
    // console.log("val2 entered", val2);
    if (sign.current !== "" && val1 !== null && val2 !== null) {
      let res = compute(val1, val2, sign.current) || null;
      console.log(`result : ${val1} ${sign.current} ${val2} -> ${res}`);
      setVal("");
      setVal1(Number(res));
      setResult(Number(res));
      setVal2(null);
      setExp(res);
    }
  }, [val2, val]);

  const handleInput = (value) => {
    if (calc) {
      setCalc(false);
      setExp("");
      setOp("");
      setVal("");
      setVal1(null);
      setVal2(null);
      setResult(null);
      sign.current = "";
      console.log("Calculator reset");
    }
    if (value === "C") {
      setExp("");
      setOp("");
      setVal("");
      setVal1(null);
      setVal2(null);
    } else if (nums.includes(value)) {
      setExp((prev) => prev + value);
      setVal((prev) => prev + value);
      console.log("number pressed: ", value);
    } else if (operators.includes(value)) {
      //   setExp((prev) => prev + value);
      if (val1 === null && val !== "") {
        setVal1(Number(val));
        setVal("");
      } else if (val2 === null && val !== "") {
        setVal2(Number(val));
        setVal("");
      }
      setTimeout(() => {
        sign.current = value;
        setOp(sign.current);
        console.log("operator pressed: ", sign.current);
        setExp((prev) => prev + sign.current);
      }, 0);
    }
  };

  const endCalc = () => {
    if (val1 !== null && val2 === null && sign.current !== "") {
      const v2 = Number(val);
      const ans = compute(val1, v2, sign.current);
      console.log("finalAns: ", ans);
      console.log("Calculation completed");
      setVal("");
      setVal1(null);
      setVal2(null);
      sign.current = "";
      setOp("");
      setResult(ans);
    }
    setCalc(true);
  };

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full grid grid-cols-4 gap-1.5 text-xl ">
        {keys.map((keys, idx) => {
          const isNum = nums.includes(keys.label);
          return (
            <button
              key={idx}
              className={`border border-gray-200 rounded-sm cursor-pointer 
                ${
                  isNum
                    ? "hover:bg-blue-50 hover:border-blue-300"
                    : `bg-blue-50 hover:bg-blue-100 hover:border-blue-300 text-blue-500 ${
                        theme ? "dark:bg-[#212327] text-blue" : ""
                      }`
                }
                ${
                  theme
                    ? `dark:bg-[#272a30] dark:text-gray-300 dark:border-gray-800 hover:dark:bg-[#212327] dark:hover:border-blue-500 ${
                        !isNum ? "dark:text-blue-500" : ""
                      }`
                    : ""
                }`}
              onClick={() => handleInput(keys.value)}
            >
              {keys.label}
            </button>
          );
        })}
        <button
          className={`col-span-2 border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100 hover:border-blue-300 text-blue-500
            ${
              theme
                ? "dark:bg-[#212327] dark:text-gray-400 dark:border-gray-800 hover:dark:bg-[#212327] dark:hover:border-blue-500"
                : ""
            }`}
          onClick={() => endCalc()}
        >
          {"="}
        </button>
      </div>
    </div>
  );
};

export default KeyPadCalculator;
