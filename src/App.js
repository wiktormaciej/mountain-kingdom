import React from 'react';
import LandingPage from './pages/LandingPage'
import MainLayout from './layouts/MainLayout/MainLayout'
import './App.css'
const App = () => {
  return (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );
}

export default App;
