import React, { useState } from "react";
import './ToolsStyle/CheckPalindrome.css';

const CheckPalindrome = () => {
   const [getNumber, setGetNumber] = useState(""); // Initialize as an empty string
   const [isPalindrome, setIsPalindrome] = useState(null); // null indicates no result yet
   const [reverse, setReverse] = useState(0);
   const [oriNumber, setOrinumber] = useState(0);

   function checkPalindrome() {
      let newNumber = parseInt(getNumber); // Convert input string to a number
      if (isNaN(newNumber)) {
         alert("Please enter a valid number.");
         return;
      }

      let originalNumber = newNumber;
      let rev = 0;

      // Reverse the number
      while (newNumber > 0) {
         let num = newNumber % 10;
         rev = rev * 10 + num;
         newNumber = Math.floor(newNumber / 10);
      }

      // Check if the original number is equal to the reversed number
      setReverse(rev);
      setOrinumber(originalNumber)
      setIsPalindrome(originalNumber === rev);
   }

   return (
      <>
         <div className="check-palindrome">
            {
               isPalindrome === true ? "Palindrom" : "Not Palindrome"
            }
            <br />
            <br />
            <div className="result">
               <p>Your Number : {oriNumber}</p>
               <p>Reversed Number : {reverse}</p>
            </div>
            <div className="containers">
               <input
                  type="number"
                  value={getNumber}
                  onChange={(e) => setGetNumber(e.target.value)}
                  placeholder="Enter a number"
               />
               <button onClick={checkPalindrome}>Check</button>
            </div>


         </div>
      </>
   );
};

export default CheckPalindrome;
