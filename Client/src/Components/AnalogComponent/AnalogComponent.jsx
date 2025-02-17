import React, { useEffect, useRef, useState } from 'react';
import './AnalogComponent.css';

const AnalogClock = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [date, setDate] = useState({
    day: '00',
    month: '00',
    year: '0000'
  });

  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // Getting day, month, and year
      const day = now.getDate().toString().padStart(2, '0'); // Pad single digit day with 0
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Pad single digit month with 0
      const year = now.getFullYear();

      setDate({
        day,
        month,
        year
      });

      const hours = now.getHours() * 30 + now.getMinutes() * 0.5; // Account for the hour hand moving with minutes
      const minutes = now.getMinutes() * 6;
      const seconds = now.getSeconds() * 6;

      setTime({
        hours,
        minutes,
        seconds,
      });

      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hours}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minutes}deg)`;
      }
      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${seconds}deg)`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="clock_container">
        <div className="clock_body">
          <div className="twelve_value"></div>
          <div className="three_value"></div>
          <div className="six_value"></div>
          <div className="nine_value"></div>
          <div className="clock_center">
            <div className="hour">
              <div className="hr" ref={hourRef}></div>
            </div>
            <div className="minute">
              <div className="mn" ref={minuteRef}></div>
            </div>
            <div className="second">
              <div className="sc" ref={secondRef}></div>
            </div>
          </div>
        </div>
        <div className="show-date">
          <div className="day">{date.day}</div>
          <div className="month">{date.month}</div>
          <div className="year">{date.year}</div>
        </div>
      </div>
    </>
  );
};

export default AnalogClock;