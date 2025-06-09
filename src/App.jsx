import React, { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Converter from "./components/converter/Converter";
import Calculator from "./components/calculator/Calculator";
import CalcContext from "./calcContext/CalcContext";
// import Home from "./components/Home";

// #1c1d21
// #212327
// #272a30

const App = () => {
  const { mode, theme } = useContext(CalcContext);
  return (
    <div
      style={
        theme
          ? {
              background:
                "radial-gradient(circle, rgb(35, 35, 35) 00%, rgb(0, 0, 0) 100%)",
            }
          : {
              background:
                "radial-gradient(circle, rgba(247, 247, 247, 1) 15%, rgb(191, 220, 255) 100%)",
            }
      }
      // style={{
      //   backgroundColor: " #f7f7f7",
      //
      // }}
      className="w-full h-screen flex justify-center relative items-center bg-blue-50 "
    >
      <div
        className={`w-[450px] h-[550px] py-4 px-6 flex flex-col  border ${
          theme ? "border-gray-800" : "border-gray-100"
        } rounded-xl shadow-xl bg-white
          ${theme ? "dark:bg-[#1c1d21] dark:text-gray-300" : ""}
          `}
      >
        <Header />
        {mode === "calculator" && <Calculator />}
        {mode === "converter" && <Converter />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
