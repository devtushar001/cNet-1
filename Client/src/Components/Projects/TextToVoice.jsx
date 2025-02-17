import React, { useEffect, useState } from "react";
import './ProjectsStyle/TextToVoice.css';

const TextToVoice = () => {
   let [text, setText] = useState('');
   let [voices, setVoices] = useState([]);
   let [selectedVoice, setSelectedVoice] = useState(null);
   let [isSpeaking, setIsSpeaking] = useState(false);

   // Function to generate the voice
   function generateVoice() {
      if (text.trim() === ' ') {
         text = 'Please enter some text.';
      }

      const utterance = new SpeechSynthesisUtterance(text);

      // Use the selected voice, if any
      if (selectedVoice) {
         utterance.voice = selectedVoice;
      }

      // Set up events for speech synthesis
      utterance.onstart = () => {
         setIsSpeaking(true); // Start vibration when speaking begins
      };

      utterance.onend = () => {
         setIsSpeaking(false); // Stop vibration when speaking ends
      };

      window.speechSynthesis.speak(utterance);
      console.log(window.speechSynthesis.speak(utterance));
   }

   // Fetch available voices when the component mounts
   useEffect(() => {
      const synth = window.speechSynthesis;
      const fetchVoices = () => {
         const availableVoices = synth.getVoices();
         setVoices(availableVoices);
         if (availableVoices.length > 0) {
            setSelectedVoice(availableVoices[0]); // default to the first voice
         }
      };

      fetchVoices();

      // Update voices when the list changes (some browsers may change voices dynamically)
      if (synth.onvoiceschanged !== undefined) {
         synth.onvoiceschanged = fetchVoices;
      }

   }, []);

   return (
      <>
         <div className="voice-text">
            <div className="text-input">
               <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text here"
               />
               <button onClick={generateVoice}>Generate</button>
               <label htmlFor="voices">Choose a voice: </label>
               <select
                  id="voices"
                  onChange={(e) => setSelectedVoice(voices.find(voice => voice.name === e.target.value))}
                  value={selectedVoice ? selectedVoice.name : ''}
               >
                  {voices.map((voice, index) => (
                     <option key={index} value={voice.name}>{voice.name}</option>
                  ))}
               </select>
            </div>
            <div className={`voice-output ${isSpeaking ? 'speaking' : ''}`}>
               <div className="vibrations"></div>
            </div>
         </div>
      </>
   );
};

export default TextToVoice;
