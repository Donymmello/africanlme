import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simula um carregamento de 2 segundos
  }, []);

  return (
    
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <Loading />
      ) : (
        
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

        </Routes>
        <Footer />
    </Router>
      )}
      </ThemeProvider>
  );
}

export default App;
