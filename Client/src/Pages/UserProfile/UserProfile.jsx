import React, { useContext, useEffect, useState } from "react";
import './UserProfile.css'
import { assets } from "../../assets/escomData";
import { EscomContext } from "../../Context/escomContext";

const UserProfile = () => {
  const { backend_url } = useContext(EscomContext);

  // State to store user data
  const [userData, setUserData] = useState(null);

  // Fetch user data
  const fetchUser = async () => {
    try {
      const response = await fetch(`${backend_url}/api/user/get-user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Sending JSON data
        },
        credentials: "include", // Ensure cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      
      // Assuming the user data is returned in the 'data' object
      setUserData(data.user); // Update the state with user data
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      // Optionally handle error state
    }
  };

  useEffect(() => {
    fetchUser();
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []); // Optional: Dependency on backend_url to re-fetch when changed

  return (
    <div className="user-prfl">
      <div className="user-info">
        {/* Render user icon and name */}
        <img src={assets.user_icon} alt="User Icon" />
        <h1>{userData ? userData.name : "Loading..."}</h1>
        <button id="edit-details">Edit details</button>
      </div>
      <hr />
      <div className="history">
        <h2>Recent activities....</h2>
        {/* You can dynamically render activities if the data is available */}
        {userData && userData.activities ? (
          userData.activities.map((activity, index) => (
            <a key={index} target="_blank" href={activity.url} rel="noopener noreferrer">
              {activity.url}
            </a>
          ))
        ) : (
          <p>No recent activities available</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
