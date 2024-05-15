// src/services/authService.ts

import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: '9c36ebc1-9934-4cf6-b8ed-63d66cc3ae94',
    authority: 'https://login.microsoftonline.com/1490b17d-5dc9-4cbf-aeba-a2e854f521b8/',
    redirectUri: 'http://localhost:5173/', // Adjust based on your application's URL

  },
};

let msalInstance: PublicClientApplication | null = null;

export const initializeMsal = async () => {
  if (!msalInstance) {
    msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.handleRedirectPromise();
  }
};

export const loginWithMicrosoft = async () => {
  if (!msalInstance) {
    throw new Error('MSAL client not initialized.');
  }

  const loginRequest = {
    scopes: ['user.read'],
  };

  try {
    const response = await msalInstance.loginPopup(loginRequest);
    return response.account; // Assuming you only need the account information
  } catch (error) {
    throw new Error('Microsoft login failed: ' + error);
  }
};

