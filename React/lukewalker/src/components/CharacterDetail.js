// components/CharacterDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = (props) => {
  const { characterId } = useParams();
  const { characterType } = useParams();
  const [people, setPeople] = useState("");

  useEffect(() => {
    fetch(`https://swapi.dev/api/${props.currentApiType}/${props.currentApiNumber}`)
            .then(response => (response.json()))
            .then(response => setPeople(response)   )
  }, []);

    
  return (
    <div>
      {
        
        characterType == "people"? (<div><h1>Name: people.name</h1>
        <p>Hight :  {people.height}</p>
                        <p>Mass  :  {people.mass}</p>
                        <p>Hair Color : {people.hair_color}</p>
                        <p>Skin Color : {people.skin_color}</p>
          </div>
        )
        :(
          <>
          <h1>Name : {people.name}</h1>
          <p>Climate : {people.climate}</p>
          <p>Terrain :{people.terrain}</p>
          <p>Surface Water : {people.surface_water}</p>
          <p>population : {people.population}</p></>)
        
      }
      <h1>{people.name}</h1>
    </div>
  );
};

export default CharacterDetail;
