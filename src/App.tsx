import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MicrosoftLoginButton from './components/MicrosoftLoginButton';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {


  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<MicrosoftLoginButton />}  />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
