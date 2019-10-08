import React from 'react';
//import axios from 'axios';

function CharacterDetails({characterDetails}) {
  let content;

  if (Object.keys(characterDetails).length) {
    content = (
      <div className='charexplanation'>
        <h3 id='detailtitle'>DETAILS:</h3>
        <p>{characterDetails.name}</p>
        <p>Status: {characterDetails.status}</p>
        <p>Gender: {characterDetails.gender}</p>
        <p>Species: {characterDetails.species}</p>
        <p>Location: {characterDetails.location.name}</p>
        <p>Origin: {characterDetails.origin.name}</p>
        {/* <a href={characterDetails.origin.url} target='_blank'>Visit Origin</a> */}
      </div>
    )
    // content = Object.keys(characterDetails) && Object.keys(characterDetails).map((character, index) => {
    // //content = characterDetails && characterDetails.map((character, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{characterDetails[character].name}</p>
          
    //       <p> Name: {characterDetails.name}</p>
    //       <p> Gender: {characterDetails.gender}</p>
    //       {/* <p>{character.name}</p>
    //       <p>{character.status}</p>
    //       <p>{character.gender}</p>
    //       <p>{character.species}</p> */}
    //     </div>
    //   )
    // })
  } else {
    content = <img 
      src="https://freepngimg.com/download/rick_and_morty/27630-5-rick-and-morty-transparent-background.png"
      id='nocontent' 
    />
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default CharacterDetails;