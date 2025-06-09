import { useContext } from "react";

export const keys = [
  { label: "C", value: "C" },
  { label: "del", value: "null" },
  { label: "%", value: " % " },
  { label: "/", value: " / " },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "x", value: " * " },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "-", value: " - " },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "+", value: " + " },
  { label: ".", value: "." },
  { label: "0", value: "0" },
];
export const nums = ".0123456789";
export const operators = " + - * / % ";
export const compute = (val1, val2, op) => {
  const v1 = Number(val1);
  const v2 = Number(val2);
  let result;

  switch (op?.trim()) {
    case "+":
      result = v1 + v2;
      break;
    case "-":
      result = v1 - v2;
      break;
    case "*":
      result = v1 * v2;
      break;
    case "/":
      result = v1 / v2;
      break;
    case "%":
      result = (v1 * v2) / 100;
      break;
    default:
      result = "Invalid Operation";
  }
  return result;
};
