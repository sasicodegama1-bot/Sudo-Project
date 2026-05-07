import React, { useState } from 'react'
import Themer from './Themer';

const Calculator = () => {
  
  // State to store what the user is currently typing
  const [current, setCurrent] = useState("0");

  // State to store the first number (before operator)
  const [prev, setPrev] = useState("");

  // State to store the operator (+, -, *, /)
  const [operator, setOperator] = useState("");

  // ─── When user clicks a number button ───
  const handleDigit = (digit: string) => {
    if (current === "0") {
      setCurrent(digit); // replace the "0" with the digit
    } else {
      setCurrent(current + digit); // append digit to current number
    }
  };

  // ─── When user clicks +, -, *, / ───
  const handleOperator = (op: string) => {
    setPrev(current);    // save the current number as "previous"
    setOperator(op);     // save which operator was pressed
    setCurrent("0");     // reset current so user can type next number
  };

  // ─── When user clicks = ───
  const handleEquals = () => {
    const a = parseFloat(prev);      // first number
    const b = parseFloat(current);   // second number
    let result = 0;

    // Do the math based on which operator was saved
    if (operator === "+") result = a + b;
    if (operator === "-") result = a - b;
    if (operator === "*") result = a * b;
    if (operator === "/") result = a / b;

    setCurrent(String(result)); // show the result
    setPrev("");                // clear prev
    setOperator("");            // clear operator
  };

  // ─── When user clicks AC (clear) ───
  const handleClear = () => {
    setCurrent("0");
    setPrev("");
    setOperator("");
  };

  // ─── Reusable button style ───
  const btn = "bg-white p-4 text-center text-lg font-semibold rounded-xl cursor-pointer hover:bg-blue-100 active:scale-95 transition-transform";

  return (
    <>
    <Themer />
     <div className="h-screen bg-blue-50 dark:bg-black flex items-center justify-center">
      <div className="bg-blue-100 dark:bg-black-100 border border-blue-200 rounded-2xl p-4 w-64 flex flex-col gap-3">

        {/* ── Display Screen ── */}
        <div className="bg-white dark:bg-black-200 rounded-xl p-4 text-right">
          {/* Shows the saved number and operator */}
          <p className="text-sm text-gray-400">
            {prev} {operator}
          </p>
          {/* Shows what the user is currently typing */}
          <p className="text-3xl font-bold text-gray-800">{current}</p>
        </div>

        {/* ── Button Grid ── */}
        <div className="grid grid-cols-4 gap-2">

          {/* Row 1 */}
          <div className={`${btn} col-span-3 text-red-500`} onClick={handleClear}>AC</div>
          <div className={`${btn} text-blue-600`} onClick={() => handleOperator("/")}>÷</div>

          {/* Row 2 */}
          <div className={btn} onClick={() => handleDigit("7")}>7</div>
          <div className={btn} onClick={() => handleDigit("8")}>8</div>
          <div className={btn} onClick={() => handleDigit("9")}>9</div>
          <div className={`${btn} text-blue-600`} onClick={() => handleOperator("*")}>×</div>

          {/* Row 3 */}
          <div className={btn} onClick={() => handleDigit("4")}>4</div>
          <div className={btn} onClick={() => handleDigit("5")}>5</div>
          <div className={btn} onClick={() => handleDigit("6")}>6</div>
          <div className={`${btn} text-blue-600`} onClick={() => handleOperator("-")}>−</div>

          {/* Row 4 */}
          <div className={btn} onClick={() => handleDigit("1")}>1</div>
          <div className={btn} onClick={() => handleDigit("2")}>2</div>
          <div className={btn} onClick={() => handleDigit("3")}>3</div>
          <div className={`${btn} text-blue-600`} onClick={() => handleOperator("+")}>+</div>

          {/* Row 5 */}
          <div className={`${btn} col-span-2`} onClick={() => handleDigit("0")}>0</div>
          <div className={btn} onClick={() => handleDigit(".")}>.</div>
          <div className={`${btn} bg-blue-600 text-white hover:bg-blue-700`} onClick={handleEquals}>=</div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Calculator