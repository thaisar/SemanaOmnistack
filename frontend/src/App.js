import React from 'react';
import { 
  AppContainer,
  AppContent,
} from './styles'
import './App.css';

import logo from "./assets/logo.svg";

import Routes from './routes';

function App() {
 

  return (
    <AppContainer>
      <img src={logo} alt="AirCnC" />
 
    <AppContent>
      <Routes  />

    </AppContent>
    </AppContainer>

    );  
}

export default App;
