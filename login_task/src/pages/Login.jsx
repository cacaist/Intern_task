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

    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Are you sure that's an email?");
      return;
    }

    if (password.length < 6) {
      setError("Dont be lazy, go for at least 6 characters password!");
      return;
    }

    // If everything is ok
    setError("");
    // Navigate to other page
    navigate('/welcome', { state: { userEmail: email } });
  };
  //snow
  const renderSnowflakes = () => {

    return [...Array(50)].map((_, i) => {

      const randomStyle = {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 7}s`, 
        animationDuration: `${6 + Math.random() * 10}s`,
        fontSize: `${0.8 + Math.random() * 1}rem`,
        opacity: Math.random() * 0.7 + 0.5 
      };

      return (
        <div key={i} className="snowflake" style={randomStyle}> ❅ </div>
      );
    });
  };

  return (
    <div className="login-bg">
      {renderSnowflakes()}
    <div className="login-card-wrapper"> 
    <div className="login-container">
      <h1>Login</h1>
      
      <form onSubmit={handleLogin} noValidate className="login-form">
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
        />

        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError("");
          }}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">
          Login
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Login;