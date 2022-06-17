// @ts-nocheck
import './App.css';
import { ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import theme from './components/TemaConfig';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <><NavBar /></>
      <ItemListContainer />
    </ThemeProvider>
  );
}  

export default App;
