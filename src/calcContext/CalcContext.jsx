import { createContext, useState } from "react";

const CalcContext = createContext();
export const CalcContextProvider = ({ children }) => {
  const [mode, setMode] = useState("calculator");
  const [theme, setTheme] = useState(true);
  const [exp, setExp] = useState("");
  const [op, setOp] = useState("");
  const [val, setVal] = useState("");
  const [val1, setVal1] = useState(null);
  const [val2, setVal2] = useState(null);
  const [calc, setCalc] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <CalcContext.Provider
      value={{
        mode,
        setMode,
        theme,
        setTheme,
        exp,
        setExp,
        op,
        setOp,
        val,
        setVal,
        val1,
        setVal1,
        val2,
        setVal2,
        result,
        setResult,
        calc,
        setCalc,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};
export default CalcContext;
