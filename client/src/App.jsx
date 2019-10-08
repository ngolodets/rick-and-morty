import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AllCharacters from './AllCharacters';
import './App.css';

function App() {
  const [allCharacters, setAllCharacters] = useState({});
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    let url = 'https://rickandmortyapi.com/api/character/';
    axios.get(url).then((response) => {
      setAllCharacters(response.data.results)
    })
  }, [])

  function getNextPage(page) {
    let url = `https://rickandmortyapi.com/api/character/?page=`
    axios.get(`${url}${page}`).then(response => {
      setAllCharacters(response.data.results);
      page++;
      setPageNumber(page);
      if (page === 25) {
        page = 1;
        setPageNumber(page);
      }
    })
  }

  function getPreviousPage(page) {
    let url = `https://rickandmortyapi.com/api/character/?page=`
    axios.get(`${url}${page}`).then(response => {
      setAllCharacters(response.data.results)
      page--;
      setPageNumber(page);
      if (page === 1) {
        page = 25;
        setPageNumber(page);
      }
    })
  }

  function getHomePage() {
    let url = "https://rickandmortyapi.com/api/character/"
    axios.get(url).then(response => {
      setAllCharacters(response.data.results);
    })
  }

  return (
    <div className="App">
      <div className='buttonsdiv'>
        <h1>
          <span id='one'>R</span>
          <span id='two'>i</span>
          <span id='three'>c</span>
          <span id='four'>k</span>
          <span> </span>
          and
          <span> </span>
          <span id='five'>M</span> 
          <span id='six'>o</span>
          <span id='seven'>r</span>
          <span id='eight'>t</span>
          <span id='nine'>y</span>
          <span> </span>
          Characters
        </h1>
        <button onClick={() => {getPreviousPage(pageNumber)}}
          className='navbutton'
          id='prev'
        >
          &laquo;
        </button>
        <button onClick={() => {getHomePage()}}
          className='navbutton'
          id='home'
        >
          HOME
        </button>
        <button onClick={() => {getNextPage(pageNumber)}}
          className='navbutton'
          id='next'
        >
          &raquo;
        </button>
      </div> 
      <div>
        <AllCharacters characters={allCharacters}
                      setCharacters={setAllCharacters} />
      </div>
    </div>
  );
}

export default App;
