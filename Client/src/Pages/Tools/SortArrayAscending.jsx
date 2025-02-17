import React, { useState } from "react";
import './ToolsItem/SortArrayAscending.css'

const SortArrayAscending = () => {
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to handle adding a value to the array
  const handleAddValue = () => {
    if (inputValue.trim() !== "") {
      const updatedArray = [...arr, parseInt(inputValue, 10)]; // Parse input as a number
      updatedArray.sort((a, b) => a - b); // Sort the array in ascending order
      setArr(updatedArray);
      setInputValue(""); // Clear the input after adding the value
    }
  };

  return (
    <>
      <div className="sort-array-ascending">
        <div className="container">
          <input
            type="number"
            placeholder="Enter a number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input value
          />
          <button onClick={handleAddValue}>Add and Sort</button> {/* Button to add value */}
        </div>
        <div className="result">
          <h3>Sorted Array:</h3>
          <p>[ {arr.join(", ")} ]</p> {/* Display sorted array */}
        </div>
      </div>
    </>
  );
};

export default SortArrayAscending;
