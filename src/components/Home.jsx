import React, { useState } from "react";

const Home = () => {
  const [mode, setMode] = useState("calculator");
  const [theme, setTheme] = useState(false);
  const [exp, setExp] = useState("");
  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [op3, setOp3] = useState();

  const handleInput = (value) => {
    setExp((prev) => prev + value);
  };
  const handleOperator = (value) => {
    setExp((prev) => prev + value);
    setOp1;
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-50">
      <div className="w-[500px] h-[550px] py-4 px-6 flex flex-col border border-gray-100 rounded-xl shadow-xl bg-white">
        <div className="w-full flex gap-4 text-gray-300 text-sm font-semibold ">
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
        <div className=" mt-3 text-3xl capitalize">{mode}</div>
        {/* screen  */}
        <div className="w-full h-[200px] my-3 flex flex-col justify-center items-center text-2xl border border-blue-300 rounded-lg">
          <input
            type="text"
            className="w-full h-10 px-3 text-right outline-none "
            disabled
          />
          <input
            type="text"
            className="w-full h-10 px-3 text-right outline-none "
            placeholder="0"
            value={exp}
          />
          <input
            type="text"
            className="w-full h-10 px-3 text-right outline-none "
            value={op3}
            disabled
          />
        </div>
        {/* input  */}
        <div className="w-full h-full my-3 grid grid-cols-4 gap-1.5 text-xl  rounded-xl">
          <button className="border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-500">
            C
          </button>
          <button className="border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-500">
            <i class="fa-solid fa-delete-left"></i>
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100 "
            onClick={() => handleInput("%")}
          >
            %
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100"
            onClick={() => handleOperator("/")}
          >
            /
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("7")}
          >
            7
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("8")}
          >
            8
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("9")}
          >
            9
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100 hover:border-blue-300 "
            onClick={() => handleOperator("x")}
          >
            <i className="bi bi-x"></i>
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("4")}
          >
            4
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("5")}
          >
            5
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("6")}
          >
            6
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100 hover:border-blue-300 "
            onClick={() => handleOperator("-")}
          >
            <i className="bi bi-dash"></i>
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("1")}
          >
            1
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("2")}
          >
            2
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("3")}
          >
            3
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100 hover:border-blue-300 "
            onClick={() => handleOperator("+")}
          >
            <i className="bi bi-plus"></i>
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput(".")}
          >
            .
          </button>
          <button
            className="border border-gray-200 rounded-sm cursor-pointer hover:bg-blue-50 hover:border-blue-300 "
            onClick={() => handleInput("0")}
          >
            0
          </button>
          <button
            className="col-span-2 border border-gray-200 rounded-sm cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-500 hover:border-blue-300 "
            onClick={() => handleInput("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
