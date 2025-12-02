import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.userEmail || "Casper"; 

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1>Welcome! 🎄</h1>
        
        <div className="fire">🔥</div>
        <div className="error-text">
          <h2>Happy New Year {email}</h2>
        </div>

        <button className="logout-btn" onClick={() => navigate('/')}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Welcome;