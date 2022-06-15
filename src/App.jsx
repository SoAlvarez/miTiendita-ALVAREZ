// @ts-nocheck
import './App.css';
import { ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import theme from './components/TemaConfig';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <><NavBar /></>
    </ThemeProvider>
  );
}  

export default App;
