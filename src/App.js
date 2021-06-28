import { useState, useMemo } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import ReactView from './components/ReactView.js';
import { ThemeProvider } from './components/hooks/useTheme.js';

const GlobalStyle = createGlobalStyle`
  body{
    padding : 0px;
    margin: 0px;
    box-sizing : border-box;
  }
  *{
    padding: 0px;
    margin: 0px;
  }
`;

const App = () => {
  const value = useMemo(
    () => ({
      react: 'images/logo512.png',
      angular: 'images/angular.png',
      vue: 'images/vue.png',
    }),
    []
  );
  return (
    <ThemeProvider value={value}>
      <GlobalStyle />
      <Navbar />
      <ReactView />
    </ThemeProvider>
  );
};

export default App;
