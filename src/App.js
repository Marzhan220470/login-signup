import React, { useState } from 'react';
import './Componens/LoginSignUp/LoginSignUp';
import user_icon from './Componens/Assets/person.png';
import email_icon from './Componens/Assets/email.png';
import password_icon from './Componens/Assets/password.png';

const LoginSignUp = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{action}</h2>
        <div className="auth-divider"></div>

        <div className="auth-inputs">
          {action === "Sign Up" && (
            <div className="auth-input">
              <img src={user_icon} alt="User Icon" />
              <input type="text" placeholder="Full Name" required />
            </div>
          )}

          <div className="auth-input">
            <img src={email_icon} alt="Email Icon" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="auth-input">
            <img src={password_icon} alt="Password Icon" />
            <input type="password" placeholder="Password" required />
          </div>
        </div>

        {action === "Login" && (
          <div className="auth-forgot">
            Forgot Password? <span>Click Here</span>
          </div>
        )}

        <div className="auth-buttons">
          <button 
            className={`auth-btn ${action === "Sign Up" ? "active" : ""}`} 
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button 
            className={`auth-btn ${action === "Login" ? "active" : ""}`} 
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
