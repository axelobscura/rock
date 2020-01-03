import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: 'https://api.spotify.com/v1/search?query=Muse&type=artist&market=US&offset=5&limit=10',
        headers: {
          'Accept':'application/json'
        },
        Authorization: {
          Bearer: 'BQDnjvtqz6jbcHAFzq6KMqsQS0TDXmJOidcUfcSv_JflsRpdy5Q872PXB0lmdIhioLwBt8DHngIGBhZsmPc775Pbk8wfeb1WZdpnIH6AAOUxSgGmPbUYKyGLKlC0hWuPLcyIBdTVi8xgq-lWaNIcenITQT3aHj5PhM3dQiX47vO7me9cVQZMTSCldVBJJgNkewPX41_Y94e4F0BVoLJL-ldB8FsvKsh01A'
        }
      }).then(() => {
        setData(response.data);
      });
      
    }
    fetchData();
  }, []);
  const elano = (valor) => {
    console.log(valor);
    console.log(data.hits);
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
