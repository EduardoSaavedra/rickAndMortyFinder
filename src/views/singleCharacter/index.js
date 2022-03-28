import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Link from '@mui/material/Link';


import CharactersActions from "actions/charactersActions";
import CharactersStore from "../../stores /charactersStore.js";

const getCurrentState = () => ({
  character: CharactersStore.getCharacter(),
});

const SingleCharacter = () => {
  const [character, setCharacter] = useState(getCurrentState().character);
  let { id } = useParams();
  const { name, species, image, gender } = character;
  useEffect(() => {
    const characterId = id;
    CharactersActions.getSingleCharacter(characterId);
    CharactersStore.addChangeListener(_onChange);

    return () => {
      CharactersStore.removeChangeListener(_onChange);
    };
  }, []);

  const _onChange = () => {
    const { character } = getCurrentState();
    setCharacter(character);
  };

  return (
    <div className="character__layout">
      <div className="character__detail">
				<Link href={`/`}>Back</Link>
        <img className="character__image" src={image} alt={name} />
        <p>Name: {name}</p>
        <p>Specie: {species}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
};

export default SingleCharacter;
