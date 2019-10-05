import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AllCharacters from './AllCharacters';
import './App.css';

function App() {
  const [allCharacters, setAllCharacters] = useState({});

  useEffect(() => {
    let url = 'https://rickandmortyapi.com/api/character/';
    axios.get(url).then((response) => {
      setAllCharacters(response.data.results)
        // .catch((error) => {
        //   console.log(error)
        // })
    })
  }, [])

  return (
    <>
    <div className="App">
      
        
          <AllCharacters characters={allCharacters}
                      setCharacters={setAllCharacters} />
        
      
    </div>
    
    </>
  );
}

export default App;
