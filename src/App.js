import { useMemo } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './components/hooks/useTheme';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

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
      <MainContent />
    </ThemeProvider>
  );
};

export default App;
