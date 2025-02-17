import React, { useState } from "react";
import './ToolsStyle/FindLargestNumber.css';


const FindLargestNumber = () => {
  const [arr, setArr] = useState('');

  const singleValue = arr.split(",");

  function getLargestNumber() {
    let large = 0;
    for (let i = 0; i < singleValue.length; i++) {
      if (Number(singleValue[i]) > large) {
        large = singleValue[i]
      } else {
        large;
      }
    }
    return large;
  }
  let maxInArray = getLargestNumber();
  return (
    <>
      <div className="large-in-array">
        <div className="input-fields">
          <input placeholder="Enter a array ex -> 4,5,7,2,3,9,5,7,6,7,8....!" type="text" value={arr} onChange={(e) => setArr(e.target.value)} />
          <button onClick={getLargestNumber}>Check</button>
        </div>
        <div className="result">
          {maxInArray}
        </div>
      </div>

    </>
  )
}

export default FindLargestNumber;