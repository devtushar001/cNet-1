import React, { useEffect, useState } from 'react';
import './ToolsStyle/GetPrimeOnRange.css'

const GetPrimeOnRange = () => {
  const [range, setRange] = useState({ start: '', end: '' });
  const [primes, setPrimes] = useState([]);
  let primeSum = 0;

  primes.map((prime) => {
    return primeSum += prime;
  })

  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Function to calculate primes in the range
  const calculatePrimes = () => {
    const start = parseInt(range.start, 10);
    const end = parseInt(range.end, 10);

    if (isNaN(start) || isNaN(end) || start > end || start < 0 || end < 0) {
      setPrimes(["Invalid number...."])
      // alert('Please enter a valid range.');
      return;
    }

    const primesInRange = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) primesInRange.push(i);
    }

    setPrimes(primesInRange);
  };

  useEffect(() => {
    //  window.scrollTo(0)
  }, [])

  return (
    <div className='get-prime-on-range' >
      <h1>Prime Numbers in Range</h1>
      <div className="container">
        <div className='inputs'>
          <input
            type="number"
            placeholder='Enter first number'
            value={range.start}
            onChange={(e) => setRange({ ...range, start: e.target.value })}
          />
          <input
            type="number"
            placeholder='Enter second number'
            value={range.end}
            onChange={(e) => setRange({ ...range, end: e.target.value })}
          />
          <button onClick={calculatePrimes}>Get Primes</button>
        </div>
        <div className="prime-numbers">
          {primes.length > 0 ? (
            <ul>
              {primes.map((prime, index) => (
                <>
                  <span key={index}>{prime} {primes.length - 1 > index ? "," : " "} </span>
                </>
              ))}
              <hr />
              <div id="others-data">
                <p>Total primes numbers : {primes.length}</p>
                <p>Sum of prime numbers : {primeSum}</p>
              </div>

            </ul>

          ) : (
            <p>No primes found or enter a valid range.</p>
          )}
        </div>

      </div>

    </div>
  );
};

export default GetPrimeOnRange;
