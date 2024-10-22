// Solamente importa la imagen si se encuentra dentro de la carpeta src
// import imageRickMorty from './img/rick-morty.png'
import './App.css'
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  // Funcion asincrona
  const requestApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    console.log(characterApi);
    setCharacters(characterApi.results);

    // https://rickandmortyapi.com/
    // web oficial de la API Rick and Morty
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Rick & Morty</h1>
        {
          characters ? (
            <Characters characters={characters} setCharacters={setCharacters} />
          ) : (
            <>
              {/* <img src={imageRickMorty} alt="Rick & Morty" className='img-home' /> */}
              <img src={"./img/rick-morty2.png"} alt="Rick & Morty" className='img-home' />

            </>
          )
        }
        {/* Boton para buscar */}
        <button onClick={requestApi} className='btn-search'>Buscar personajes</button>
      </header>
    </div>
  )
}

export default App
