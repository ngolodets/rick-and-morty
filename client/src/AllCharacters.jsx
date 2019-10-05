import React, {useState} from 'react';
import axios from 'axios';

function AllCharacters({characters, setCharacters}) {
  let content;
  const [pageNumber, setPageNumber] = useState(2);

  function getNextPage(page) {
    let url = `https://rickandmortyapi.com/api/character/?page=`
    axios.get(`${url}${page}`).then(response => {
      setCharacters(response.data.results);
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
      setCharacters(response.data.results)
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
      setCharacters(response.data.results);
      // page = 2;
      // setPageNumber(page);
    })
  }

  if (characters.length) {
    content = characters && characters.map((character, index) => {
      return (
        <div>
          <h4>{character.name}</h4>
          <div className='picdiv'>
            <img src={character.image} 
              alt="character pic"
              className='charpic'/>
          </div>
          <h5>{character.status}</h5>
          <h5>{character.species}</h5>
          <h5>{character.gender}</h5>
          <h6>From: {character.origin.name}</h6>
        </div>
      )
    })
  } else {
    content = <p>No Characters!</p>
  }

  return (
    <div>
      <button onClick={() => {getPreviousPage(pageNumber)}}>
        PREVIOUS
      </button>
      <button onClick={() => {getHomePage()}}>
        HOME
      </button>
      <button onClick={() => {getNextPage(pageNumber)}}>
        NEXT PAGE
      </button>
      {content}
    </div>
  )
}


export default AllCharacters;