import React, { useEffect, useState } from "react";
import './ToolsStyle/GenerateRandomArray.css';

const GenerateRandomArray = () => {
  const [array, setArray] = useState([]);

  function generateRandomArray() {
    const newArray = [];

    for (let i = 0; i < 17; i++) { // Fixed range (0 to 19) for 20 items
      newArray.push(Math.ceil(Math.random() * 100));
    }
    setArray(newArray); // Update state with a new array
  }

 

  useEffect(() => {
    setInterval(() => {
      generateRandomArray()
    }, 200)
  }, [])

  return (
    <>
      <div className="random-array">
        <div className="create-array">
          <button onClick={generateRandomArray}>Generate</button>
        </div>
        <div className="result">
          {array.map((item, i) => {
            return (
              <h1
                style={{ height: `${(item + 40) * 2}px` }} // Correct inline style as an object
                className="arr"
                key={i}
              >
                {item}
              </h1>
            );
          })}
        </div>
        <div className="create-array">
        </div>
      </div>
    </>
  );
};

export default GenerateRandomArray;
