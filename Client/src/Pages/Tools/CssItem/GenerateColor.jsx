import React, { useState } from "react";
import './CssStyles/GenerateColor.css';

const GenerateColor = () => {
  const [hex, setHex] = useState("#000000");
  const [rgb, setRgb] = useState("rgb(0, 0, 0)");

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleColorChange(e) {
    const newHex = e.target.value;
    setHex(newHex);
    setRgb(hexToRgb(newHex));
  }

  return (
    <div className="generate-color">
      <div className="color-input">
        <input
          title="Select color"
          type="color"
          value={hex}
          onChange={handleColorChange}
        />
      </div>
      <div className="color-output">
        <input id="hex" type="text" value={hex} readOnly />
        <input id="rgb" type="text" value={rgb} readOnly />
      </div>
    </div>
  );
};

export default GenerateColor;
