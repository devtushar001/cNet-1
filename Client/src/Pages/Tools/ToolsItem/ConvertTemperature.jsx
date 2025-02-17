import React, { useState } from "react";
import './ToolsStyle/ConvertTemperature.css'

const ConvertTemperature = () => {
  const [tempCelsius, setTempCelsius] = useState("");
  const [tempFahrenheit, setTempFahrenheit] = useState("");

  // Function to convert Celsius to Fahrenheit
  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  // Function to convert Fahrenheit to Celsius
  const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  // Handle change for Celsius input
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setTempCelsius(value);
    setTempFahrenheit(value ? convertToFahrenheit(value) : "");
  };

  // Handle change for Fahrenheit input
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setTempFahrenheit(value);
    setTempCelsius(value ? convertToCelsius(value) : "");
  };

  return (
    <div className="convert-temperature">
      <div className="celcius">
        <input type="number" value={tempCelsius} onChange={handleCelsiusChange} placeholder="Enter Celsius"/> &deg;C
      </div>
      <div className="fahrenheit">
        <input type="number" value={tempFahrenheit} onChange={handleFahrenheitChange} placeholder="Enter Fahrenheit"/> &deg;F
      </div>
    </div>
  );
};

export default ConvertTemperature;
