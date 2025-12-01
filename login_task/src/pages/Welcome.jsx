import React from 'react';
import { useLocation } from 'react-router-dom';

function Welcome() {
  const location = useLocation();
  const email = location.state?.userEmail || "Casper";

  return (
    <div >
      <h1>Welcome! {email}</h1>
      
    </div>
  );
}

export default Welcome;