import React, { useEffect, useState } from "react";
import './ToolsStyle/RockPaperScissor.css';

const RockPaperScissor = () => {
  const [result, setResult] = useState('Make your move!');
  const [getUser, setGetUser] = useState('');
  const [getComputer, setGetComputer] = useState('');
  const [showR, setShowR] = useState({
    wins: 0,
    losses: 0,
    ties: 0
  });

  function resetGame() {
    setShowR({
      wins: 0,
      losses: 0,
      ties: 0
    })
    setResult('Make your move!');
    document.getElementById("resp").style.color = 'rgb(0, 0, 0)';
  }

  let delay = 1000;

  function computerChoose() {
    const value = ['rock', 'paper', 'scissor'];
    const randomChoose = value[Math.floor(Math.random() * 3)];
    setGetComputer(randomChoose);
    return randomChoose;
  }

  function getResult() {
    const randomValue = computerChoose();
    if (getUser === randomValue) {
      setResult("It's a tie!");
      setShowR((prev) => ({ ...prev, ties: prev.ties + 1 }));
      document.getElementById("resp").style.color = 'rgb(0, 106, 151)';
    } else if (
      (getUser === 'rock' && randomValue === 'scissor') ||
      (getUser === 'paper' && randomValue === 'rock') ||
      (getUser === 'scissor' && randomValue === 'paper')
    ) {
      setResult("You won!");
      setShowR((prev) => ({ ...prev, wins: prev.wins + 1 }));
      document.getElementById("resp").style.color = 'rgb(0, 218, 33)';
    } else {
      setResult("You lose!");
      setShowR((prev) => ({ ...prev, losses: prev.losses + 1 }));
      document.getElementById("resp").style.color = 'rgb(255, 0, 0)';
    }
    setGetUser(''); // Reset user input after the result
  }

  useEffect(() => {
    if (getUser) {
      const timer = setTimeout(() => {
        getResult();
      }, delay);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [getUser]);

  return (
    <div className="rock-paper-scissor">
      <div className="user-input">
        <button onClick={() => setGetUser('rock')} className={getUser === "rock" ? "active" : ""}>Rock</button>
        <button onClick={() => setGetUser('paper')} className={getUser === "paper" ? "active" : ""}>Paper</button>
        <button onClick={() => setGetUser('scissor')} className={getUser === "scissor" ? "active" : ""}>Scissor</button>

      </div>
      <div className="result">
        <p id="resp">{result} </p>
        <br />
        <hr />
        <div className="result-count">
          <span>Wins: {showR.wins}</span>
          <span>Losses: {showR.losses}</span>
          <span>Ties: {showR.ties}</span>
          <span>Total Matches: {showR.ties + showR.losses + showR.wins}</span>
        </div>
      </div>
      <div className="reset">
        <button onClick={resetGame} className="reset-btn">Reset</button>
      </div>
      <div className="dfs">
        <p>Computer Choose {getComputer}</p>
      </div>
    </div>
  );
};

export default RockPaperScissor;
