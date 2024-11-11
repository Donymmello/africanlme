import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
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
    const timer = setTimeout(() => setLoading(false), 1000); // Tempo simulado
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <CircularProgress color="primary" />;

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

        </Routes>
        <Footer />
    </Router>
      )}
      </ThemeProvider>
  );
}

export default App;
