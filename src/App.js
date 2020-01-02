import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      setData(response.data);
    }
    fetchData();
  }, []);
  const elano = (valor) => {
    console.log(valor);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>BIBLIOTECA DEL ROCK</h1>
        <h2>Historias De La Música Latinoamericana</h2>
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
  <p onClick={() => setCounter(counter + 1)}>Desarrollo del Rock a través de la Historia en Latinoamérica {counter}</p>
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
