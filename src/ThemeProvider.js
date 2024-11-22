import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Cookies from 'js-cookie';

const CustomThemeProvider = ({ children, isDarkMode, toggleTheme }) => {
  useEffect(() => {
    // Atualiza o cookie com o estado inicial
    Cookies.set('theme', isDarkMode ? 'dark' : 'light', { expires: 7 });
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
