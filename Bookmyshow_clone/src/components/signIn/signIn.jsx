import React from "react";
import "./signIn.scss";
import axios from "../../../src/services/UserService"


import { useState } from 'react';

const SignIn = () => {
  // State to toggle the visibility of the popup
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to handle the button click and show the popup
  const handleSigninClick = () => {
    setPopupVisible(true); // Show the popup
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false); // Hide the popup
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", formData);
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response?.data || "Registration failed");
    }
  };

  return (
    <div className="app">
      <button onClick={handleSigninClick}>Sign In</button>

      {/* Conditionally render the popup */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div id="signIn">
              <div className="Form">
              <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
                <button>OK</button>
                <button id="error" onClick={closePopup}>
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;



