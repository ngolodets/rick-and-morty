import React, {useState} from 'react';
import axios from 'axios';
import CharacterDetails from './CharacterDetails';

function AllCharacters({characters}) {
 // const [charId, setCharId] = useState(1);
  const [characterDetails, setCharacterDetails] = useState({});
  let content;

  // function getCharId(id) {
  //   setCharId(id);
  // }

  // async function getDetails(id) {
  //   let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  //   setCharacterDetails(response.data)
  // }

  function getDetails(id) {
    console.log('getting character details')
    let url = `https://rickandmortyapi.com/api/character/${id}`
    axios.get(url).then(response => {
      setCharacterDetails(response.data)
    })
    // .catch((error) => {
    //   console.log(error)
    // })
  }

  // function showCharDetails() {
  //   let details = document.getElementById('stats');
  //   if (details.style.display === 'none') {
  //     details.style.display = 'block';
  //   } else {
  //     details.style.display = 'none';
  //   }
  // }

  // function getCharacterDetails(name, status, gender, species, origin) {
  //   setCharacterDetails({
  //     name, status, species, gender, origin
  //   })
  // }
  if (characterDetails === null) {
    return null;
  } else
  if (characters.length) {
    content = characters && characters.map((character, index) => {
      return (
        <div key={index} className='charbox' 
          onClick={() => {getDetails(character.id)}} >
          <div className='picdiv'>
            <img src={character.image} 
              alt="character pic"
              className='charpic'/>
          </div>
          {/* <div>
            <CharacterDetails characterDetails={characterDetails} />
          </div> */}
          <div className='charstats' id='stats'>
            <h4 className='details'>{character.name}</h4>
            {/* <h6 className='details'>{character.status}</h6>
            <h6 className='details'>{character.species}</h6>
            <h6 className='details'>{character.gender}</h6>
            <h6 className='details'>From: {character.origin.name}</h6> */}
          </div>
        </div>
      )
    })
  } else {
    content = <p>No Characters!</p>
  }

  return (
    <div className='flexcontainer'>
      <div className='all' 
        id='allinfo'>
        {content}
      </div>
      <div className='details'>
        <CharacterDetails characterDetails={characterDetails} />
      </div>
    </div>
  )
}


export default AllCharacters;