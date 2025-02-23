import React, { useContext, useEffect, useState } from "react";
import "./LoginSignup.css";
import { Link, useNavigate } from "react-router-dom";
import { EscomContext } from "../../Context/escomContext";

const LoginSignup = () => {
  const [signUp, setSignUp] = useState(true);
  const navigate = useNavigate();
  const { backend_url } = useContext(EscomContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "+91-7845899872",
    password: "",
    confirmPassword: "",
  });

  function validateUser() {
    if (!userData.email || !userData.password) {
      alert("Email and password are required!");
      return false;
    }

    if (signUp) {
      if (!userData.name) {
        alert("Name is required for signup.");
        return false;
      }
      if (userData.password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
      }
      if (userData.password !== userData.confirmPassword) {
        alert("Passwords do not match.");
        return false;
      }
    }
    return true;
  }

  async function handleSubmit() {
    if (!validateUser()) return;

    try {
      const endpoint = signUp ? "/api/user/register" : "/api/user/login";
      const response = await fetch(`${backend_url}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const jsonResponse = await response.json();
      if (!jsonResponse.success) {
        alert(jsonResponse.message);
        return;
      }

      localStorage.setItem("token", JSON.stringify(jsonResponse.token));
      localStorage.setItem("user", JSON.stringify(jsonResponse.user));

      window.location.reload("/user-profile");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login-signup">
      <div className="left">
        <h1>{signUp ? "Already have an account?" : "Create a new account!"}</h1>
        <button onClick={() => setSignUp((prev) => !prev)}>
          {signUp ? "Login" : "Sign Up"}
        </button>
      </div>
      <div className="right">
        {signUp && (
          <input
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Full name"
            type="text"
          />
        )}
        <input
          value={userData.email}
          onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
          placeholder="Email"
          type="email"
        />
        <input
          value={userData.password}
          onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
          placeholder="Password"
          type="password"
        />
        {signUp && (
          <input
            value={userData.confirmPassword}
            onChange={(e) => setUserData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
            placeholder="Confirm password"
            type="password"
          />
        )}
        <button onClick={handleSubmit}>{signUp ? "Sign Up" : "Login"}</button>
        {!signUp && (
          <div className="links">
            <Link to="/forgot-password"><span>Forgot password?</span></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
