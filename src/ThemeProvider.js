import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#4a90e2' },  // azul
    secondary: { main: '#f44336' }, // vermelho
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Outros Componentes */}
    </ThemeProvider>
  );
}
