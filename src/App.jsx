//@ts-check

import logo from './canastita.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <><NavBar />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" typeof='click' />
        <p>
          HOLA CODER!
        </p>
      </header>
    </div></>
  );
}  

export default App;
