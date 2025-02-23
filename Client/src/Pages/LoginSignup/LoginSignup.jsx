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
  console.log(backend_url);

  function validateUser() {
    if (signUp && userData.password !== userData.confirmPassword) {
      alert(`Hello ${userData.name}, please check your confirm password.`);
      return false;
    }
    return true;
  }

  async function userRegister() {
    try {
      if (!validateUser()) {
        return;
      }

      const response = await fetch(`${backend_url}/api/user/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
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
      localStorage.setItem('token', JSON.stringify(jsonResponse.token));
      localStorage.setItem('user', JSON.stringify(jsonResponse.user));
      console.log(document.cookie);
      window.location.href = "/user-profile";
      setUserData({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
      });

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
        {signUp && (
          <input value={userData.name} onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))} placeholder="Enter your full name" type="text" />
        )}
        <input value={userData.email} onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))} placeholder="Enter your email" type="email" />

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