import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomThemeProvider from './ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Toolbar } from '@mui/material';
import './index.css';
import Cookies from 'js-cookie';


function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(
    Cookies.get('theme') === 'dark'
  );

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    Cookies.set('theme', !isDarkMode ? 'dark' : 'light', { expires: 7 });
  };

  useEffect(() => {
    setIsDarkMode(Cookies.get('theme') === 'dark');
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Tempo simulado
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <CircularProgress color="primary" />;

  return (
    <CustomThemeProvider isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}  />
        {/* Adiciona um espaçador para compensar o Header fixo */}
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
