import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Backend register request
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, email, password })
        });
        if (response.ok) {
          alert("Registration successful");
          navigate("/login");
        } else {
          alert("Registration failed");
        }
      } catch (error) {
        console.error("Registration failed", error);
      }
    };
  
    return (
      <div className="register-container">
        <form onSubmit={handleSubmit} className="form-box">
          <h2>Register</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  export default Register;