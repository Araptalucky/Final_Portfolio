import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear auth state
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome to My profile!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;