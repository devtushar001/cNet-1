import React from "react";
import './ProjectsStyle/Timer.css'

const Timer = () => {
   return (
      <>
         <div className="timer">
            <div className="clock">
               <div className="clock_center">
                  <div className="hour">
                     <div className="hrs"></div>
                  </div>
                  <div className="minute">
                     <div className="mints"></div>
                  </div>
                  <div className="seconds">
                     <div className="secs"></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Timer;