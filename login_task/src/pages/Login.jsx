import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (email === "" || password === "") {
      setError("Maybe you should type something first?");
      return;
    }

    if (!email.includes("@")) {
      setError("Are you sure that's an email?");
      return;
    }

    if (password.length < 6) {
      setError("Dont be lazy, go for least 6 characters password!");
      return;
    }

    // If everything is ok
    setError("");
    console.log("Login Successful:", { email, password });  
    // Navigate to other page
    navigate('/welcome', { state: { userEmail: email } });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      <form onSubmit={handleLogin} noValidate className="login-form">
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;