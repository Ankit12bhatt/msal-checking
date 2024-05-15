// src/components/MicrosoftLoginButton.tsx

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { initializeMsal, loginWithMicrosoft } from '../service/authService';
import { setUser } from '../features/auth/authSlice';

const MicrosoftLoginButton: React.FC = () => {
  const dispatch = useDispatch();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await initializeMsal(); // Initialize MSAL client
      setIsInitialized(true);
    };

    initialize();
  }, []);

  const handleLogin = async () => {
    if (!isInitialized) {
      console.error('MSAL client not initialized.');
      return;
    }

    try {
      const user = await loginWithMicrosoft();
      dispatch(setUser(user));
    } catch (error) {
      console.error('Microsoft login error:', error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Login with Microsoft
    </button>
  );
};

export default MicrosoftLoginButton;
