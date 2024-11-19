import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Cookies from 'js-cookie';


const CustomThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
  Cookies.get('theme') === 'dark' // Verifica o cookie no início
);
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    Cookies.set('theme', newTheme ? 'dark' : 'light', { expires: 7 }); // Salva o tema no cookie
  };

  useEffect(() => {
    // Atualiza o estado se o cookie mudar diretamente (opcional)
    setIsDarkMode(Cookies.get('theme') === 'dark');
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
      {/* Este botão pode ser movido para onde desejar */}
      <button onClick={toggleTheme} style={{ position: 'absolute', top: 10, right: 10 }}>
         {isDarkMode ? 'Tema Claro' : 'Tema Escuro'}
      </button>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
