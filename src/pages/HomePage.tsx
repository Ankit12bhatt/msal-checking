// src/pages/HomePage.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const HomePage: React.FC = () => {
  // Get the authentication state from Redux store
  const isAuthenticated = useSelector((state: RootState) => state.auth.user !== null);

  // Render the home page only if the user is authenticated
  return isAuthenticated ? (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  ) : null;
};

export default HomePage;
