import React, { useState } from 'react';
import "./LogIn.scss"
import axios from "../../services/UserService"
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'

const App = () => {
  const navigate = useNavigate();
  // State to toggle the visibility of the popup
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [_, setCookie ] = useCookies(['token'])

  // Function to handle the button click and show the popup
  const handleSigninClick = () => {
    setPopupVisible(true); // Show the popup
  };
 
  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false); // Hide the popup
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", formData);
      setMessage(response.data);
      if (response.status === 200) {
        setCookie('token', response.data,{ path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
        setMessage("Login successfully ....!")
      }
    } catch (error) {
      setMessage(error.response?.data || "Login failed");
    }
  };

  return (
    <div className="app">
      <button onClick={handleSigninClick}>Log In</button>

      {/* Conditionally render the popup */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div id="logIn">
              <div className="Form">
              <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
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
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
                <button id="error" onClick={()=>{closePopup();window.location.reload()}}>
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

export default App;

