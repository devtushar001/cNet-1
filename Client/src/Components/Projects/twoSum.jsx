import React, { useEffect, useState } from 'react';
import './ProjectsStyle/TwoSum.css';

const TwoSum = () => {
  const [nums, setNums] = useState([]);
  const [method, setMethod] = useState(1);
  const [target, setTarget] = useState(null);
  const [result, setResult] = useState([]); // Use state to store results

  function twoSum(nums, target) {
    let res = [];
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          res.push([i, j]); // Store as a pair
        }
      }
    }
    setResult(res); // Update state with results
  }


  function getTwoSumSecond(nums, target) {
    let res = [];

    nums.map((item, i) => {
      console.log(item);

    })
  }
  useEffect(() => {
    console.log("Updated result:", result);
  }, [result]);

  return (
    <div className="two-sum">
      <div className="input-details">
        {/* Radio Buttons */}
        {/* Getting methods */}
        <div className="choose-methods">
          <label>
            <input type="radio" name="fm" id="method1" checked={method === 1} onChange={() => setMethod(1)} /> Method 1
          </label>

          <label>
            <input type="radio" name="fm" id="method2" checked={method === 2} onChange={() => setMethod(2)} /> Method 2
          </label>
        </div>
        {/* Input for array values */}
        <input
          type="text" placeholder="Array values (e.g., 7,8,5,4,11,5...)" onChange={(e) => { const values = e.target.value.split(',').map(Number); }} />
        {/* Input for target number */}
        <input type="number" placeholder="Your target (e.g., 15)" onChange={(e) => setTarget(Number(e.target.value))} />
        <button onClick={() => twoSum(nums, target)}>Submit</button>
      </div>

      <div className="output">
        <h3>Result:</h3>
        {result.length > 0 ? (
          result.map((pair, index) => (
            <p key={index}>Indices: {pair[0]}, {pair[1]}</p>
          ))
        ) : (
          <p>No pairs found</p>
        )}
      </div>
    </div>
  );
};

export default TwoSum;
