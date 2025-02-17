import React, { useState, useEffect } from "react";
import './ToolsStyle/ReverseString.css'

const ReverseString = () => {

   const [inputText, setInputText] = useState(" ");
   const [reverseString, setReverseString] = useState('');

   function revS() {
      let string = ' ';
      for (let i = inputText.length - 1; i >= 0; i--) {
         string += inputText[i];
      }
      setReverseString(string);
   }

   return (
      <>
         <div className="reverse-string">
            <div className="input-strings">
               <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
               <button onClick={revS}>Reverse It</button>
            </div>
            <div className="result">
            <span>{reverseString}</span>
            </div>
         </div>
      </>
   )
}

export default ReverseString;