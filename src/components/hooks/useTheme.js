import { createContext, useContext } from 'react';

const ThemeContext = createContext({
  src: {
    react: '',
    vue: '',
    angular: '',
  },
});

export const ThemeProvider = ThemeContext.Provider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Cannot find ThemeProvider');
  }
  return context;
};
export default ThemeContext;
