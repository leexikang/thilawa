import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ThilawaTheme from './config/Theme';
import { ThemeProvider } from '@material-ui/core';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ThilawaTheme}>
        <MainHeader />
      </ThemeProvider>
    </div>
  );
}

export default App;
