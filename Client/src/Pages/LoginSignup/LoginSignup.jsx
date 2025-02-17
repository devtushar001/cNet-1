import React, { useContext, useEffect, useState } from "react";
import './LoginSignup.css';
import { Link, useNavigate } from "react-router-dom";
import { EscomContext } from "../../Context/escomContext";

const LoginSignup = () => {
  const [signUp, setSignUp] = useState(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contact: '+91-547-895-48',
    password: '',
    confirmPassword: '',
  });
  const { backend_url } = useContext(EscomContext);

  // Validate user input
  function validateUser() {
    if (signUp && userData.password !== userData.confirmPassword) {
      alert(`Hello ${userData.name}, please check your confirm password.`);
      return false;
    }
    return true;
  }

  // Handle user registration
  async function userRegister() {
    try {
      if (!validateUser()) {
        return; // Stop execution if validation fails
      }

      const response = await fetch(`${backend_url}/api/user/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      if (!response.ok) {
        alert('Registration failed. Please try again.');
        return;
      }

      const jsonResponse = await response.json();

      if (!jsonResponse.success) {
        alert(jsonResponse.message);
        return;
      }
      console.log(jsonResponse);
      console.log(document.cookie); // Outputs all cookies
      navigate('/user-profile')
      setUserData({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
      });
      // navigate('/user-profile')

    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login-signup">
      <div className="left">
        <h1>{signUp ? "Already have an account...?" : "Create a new account here...!"}</h1>
        <button onClick={() => setSignUp((prev) => !prev)}>
          {signUp ? "Login" : "Sign Up"}
        </button>
      </div>
      <div className="right">
        {/* <h1>Welcome User!!!</h1> */}
        {signUp && (
          <input value={userData.name} onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))} placeholder="Enter your full name" type="text" />
        )}
        <input value={userData.email} onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))} placeholder="Enter your email" type="email" />
        {/* {signUp && (
          <input value={userData.contact} onChange={(e) => setUserData((prev) => ({ ...prev, contact: e.target.value }))} placeholder="Enter your contact number" type="tel" />
        )} */}
        <input value={userData.password} onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))} placeholder={signUp ? "Create password." : "Enter Password."} type="password" />
        {signUp && (
          <input value={userData.confirmPassword} onChange={(e) => setUserData((prev) => ({ ...prev, confirmPassword: e.target.value }))} placeholder="Confirm password" type="password" />
        )}
        <button onClick={userRegister}>
          {signUp ? "Sign Up" : "Login"}
        </button>
        <div className="links">
          {!signUp && <Link to="/forgot-password"><span>Forgot password</span></Link>}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;