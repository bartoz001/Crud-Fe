import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Profile.css";
const ProfileCard = () => {
  const { user } = useContext(AuthContext);
  const [UserProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await user(); // Await the async function
      setUserProfile(data); // Set the fetched data in state
    };
    fetchProduct(); // Call the async function
  }, [user]); // Include getProduct as a dependency

  // console.log(UserProfile);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5kF1iywP-mPi1_UKyl0JY9ooGzWqGWSvDg&s"
            alt=""
            className="profile-image"
          />
          <h2>{UserProfile.username}</h2>
          <p>{UserProfile.email}</p>
          <p>{UserProfile._id}</p>
        </div>
        {/* Back Side */}
        <div className="flip-card-back">
          <h2>{UserProfile.username}</h2>
          <p>{UserProfile.email}</p>
          <p>{UserProfile._id}</p>
          {/* <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <link.icon />
            </a>
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
