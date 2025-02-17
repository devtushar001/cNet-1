import React, { useState } from "react";
import './ToolsStyle/checkLeapYear.css'

const CheckLeapYear = () => {
  const [year, setYear] = useState();
  const [result, setResult] = useState("");

  function checkLeapYear() {
    const newYear = Number(year);

    // Check if the input is a valid number
    if (isNaN(newYear)) {
      setResult("Please enter a valid number.");
      return; // Exit early if invalid
    }

    // Leap year conditions
    if ((newYear % 4 === 0 && newYear % 100 !== 0) || (newYear % 400 === 0)) {
      setResult(`${newYear} is a leap year.`);
    } else {
      setResult(`${newYear} is not a leap year.`);
    }
  }

  return (
    <>
      <div className="check-leap-year">
        <div className="leap-year-inputs">
          <input value={year} onChange={(e) => setYear(e.target.value)} type="number" placeholder="Enter a year" />
          <button onClick={checkLeapYear}>Check</button>
        </div>
        <div className="leap-year-result">
          <p>{result}</p>
        </div>
      </div>
    </>
  );
};

export default CheckLeapYear;
