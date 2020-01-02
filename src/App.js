import React, {useState} from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)
  const elano = (valor) => {
    console.log(valor);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>BIBLIOTECA DEL ROCK {counter}</h1>
        <h2>Historias De La Música Latinoamericana</h2>
        <p>Desarrollo del Rock a través de la Historia en Latinoamérica</p>
        <ul>
          <li><p onClick={() => elano(1950)}>1950</p></li>
          <li><p onClick={() => elano(1960)}>1960</p></li>
          <li><p onClick={() => elano(1970)}>1970</p></li>
          <li><p onClick={() => elano(1980)}>1980</p></li>
          <li><p onClick={() => elano(1990)}>1990</p></li>
          <li><p onClick={() => elano(2000)}>2000</p></li>
          <li><p onClick={() => elano(2010)}>2010</p></li>
          <li><p onClick={() => elano(2020)}>2020</p></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
