import React, { useState } from "react";
import "./ToolsStyle/FindFibonacci.css";

const FindFibonacci = () => {
  const [range, setRange] = useState({ start: 2 });
  const [series, setSeries] = useState([]);

  function getFibonacci(n) {
    const array = [0, 1];
    if (n < 2 || n > 1000) {
      alert("Number should be between 2 and 1000");
      return [];
    }

    for (let i = 2; i < n; i++) {
      array.push(array[i - 1] + array[i - 2]);
    }
    return array;
  }

  const handleGenerateSeries = () => {
    const num = Number(range.start);
    if (!isNaN(num)) {
      setSeries(getFibonacci(num));
    } else {
      alert("Please enter a valid number.");
    }
  };

  return (
    <div className="find-fibonacci">
      <div className="fibonacci-inputs">
        <input
          type="number"
          value={range.start}
          onChange={(e) => setRange({ ...range, start: e.target.value })}
          placeholder="Enter sequence number"
          min="2"
          max="1000"
        />
        <button id="fibonacci-btn" onClick={handleGenerateSeries}>
          Find Fibonacci
        </button>
      </div>
      <div className="fibonacci-outputs">
        <ul>
          {series.map((item, index) => (
            <span key={index}>
              {item}
              {series.length - 1 > index ? ", " : " "}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FindFibonacci;
