import React, { useContext, useEffect, useState } from "react";
import './UserProfile.css'
import { assets } from "../../assets/escomData";
import { EscomContext } from "../../Context/escomContext";

const UserProfile = () => {
  const { backend_url } = useContext(EscomContext);

  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${backend_url}/api/user/get-user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);

      setUserData(data.user);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    fetchUser();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="user-prfl">
      <div className="user-info">
        <img src={assets.user_icon} alt="User Icon" />
        <h1>{userData ? userData.name : "Loading..."}</h1>
        <button id="edit-details">Edit details</button>
      </div>
      <hr />
      <div className="history">
        <h2>Recent activities....</h2>
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
