import React, { useState } from "react";
import './GamesStyle/NumberGuessing.css';

const NumberGuessing = () => {
  const [number, setNumber] = useState(Math.ceil(Math.random() * 10));
  const [userNumber, setUserNumber] = useState("");
  const [chance, setChance] = useState(5);
  const [result, setResult] = useState('Showing your result');

  const decreaseChance = () => {
    // Handle empty input
    if (userNumber === "") {
      setResult("Please enter a number!");
      document.getElementById("notification").style.backgroundColor = 'rgb(255, 0, 0)';
      hideResult()
      return;
    }

    // Compare userNumber with the random number
    if (Number(number) === Number(userNumber)) {
      setResult("You won! The number was " + number);
      document.getElementById("notification").style.backgroundColor = 'rgb(55, 255, 0)';
      resetGame();
      hideResult()
      return;
    }

    // Decrease the chance
    if (chance > 1) {
      setChance(chance - 1);
      if (Number(number) > Number(userNumber)) {
        setResult("Guess higher!");
      document.getElementById("notification").style.backgroundColor = 'rgb(0, 161, 247)';
      hideResult();
      } else {
        setResult("Guess lower!");
      document.getElementById("notification").style.backgroundColor = 'rgb(102, 0, 255)';
      hideResult()
      }
    } else {
      setResult("Game over! The number was " + number);
      document.getElementById("notification").style.backgroundColor = 'rgb(144, 120, 41)';
      resetGame();
      hideResult()
    }
  };

  const resetGame = () => {
    setNumber(Math.ceil(Math.random() * 10)); // Reset random number
    setChance(5); // Reset chances
    setUserNumber(""); // Clear user input
  };

  function hideResult() {
    setTimeout(() => {
      document.getElementById("notification").style.backgroundColor = 'brown';
       setResult("Showing your result")
    }, 2000)
  }

  return (
    <>
    <div id="notification" className="notification">{result}</div>
    <div className="number-guess-game">
      <div className="user-input">
        <input value={userNumber} onChange={(e) => setUserNumber(e.target.value)} type="number" placeholder="Enter your guess between 1 and 10" />
        <button onClick={decreaseChance}>Check</button>
      </div>
      <div className="result">
        <p>Chance Left: {chance}</p>
        <button onClick={resetGame}>Restart</button>
      </div>
    </div>
    </>
  );
};

export default NumberGuessing;
