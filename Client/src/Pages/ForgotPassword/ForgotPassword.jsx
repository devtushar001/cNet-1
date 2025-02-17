import React from "react";
import './ForgotPassword.css'

const ForgotPassword = () => {
  return (
    <>
      <div className="forgot-password">
        <div className="container">
          <input placeholder="Enter your register number" type="number" /><button>Send otp</button>
          <input placeholder="Enter 4 digit otp" type="number" />
          <button>Submit</button>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;