import React, { useState } from "react";
import './ToolsStyle/GenerateRandomNumbers.css'

const GenerateRandomNumbers = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  return (
    <>
      <div className="generate-random-number">
        <div className="random-btn">
          <button onClick={() => setRandomNumber(Math.ceil(Math.random()*100))}>Generate random number...</button>
        </div>
        <div className="show-result">
          <input value={randomNumber} type="number" />
        </div>
      </div>
    </>
  )
}

export default GenerateRandomNumbers;