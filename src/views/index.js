import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import CharactersActions from "actions/charactersActions";
import Pagination from "@mui/material/Pagination";

import CharactersStore from "/Users/usuario-rtd/Desktop/challenge/src/stores /charactersStore.js";
import Character from "./characters";
import Filters from "./filters";

const getCurrentState = () => ({
  characters: CharactersStore.getCharactersList(),
  totalPages: CharactersStore.getTotalPages(),
});

const CharacterList = () => {
  const urlPath = useLocation();
  let navigate = useNavigate();
  const [characters, setCharacters] = useState(getCurrentState().characters);
  const [totalPages, setTotalPages] = useState(getCurrentState().totalPages);
  const [location, setLocation] = useState(urlPath);
  useEffect(() => {
    loadData();
    CharactersStore.addChangeListener(_onChange);

    return () => {
      CharactersStore.removeChangeListener(_onChange);
    };
  }, [location]);

  const loadData = () => {
    const { search } = location;
    const params = {
      page: search,
    };
    CharactersActions.getCharactersList(params);
  };

  const _onChange = () => {
    const { characters, totalPages } = getCurrentState();
    setTotalPages(totalPages);
    setCharacters(characters);
  };

  const handleChange = (event, value) => {
    setLocation((prevInvoice) => ({
      ...prevInvoice,
      search: value,
    }));
    navigate(`/?page=${value}`, { replace: true });
  };



  return (
    <div className="character-layout">
      <Filters />
      <Character characters={characters} />
      <div className='character-paginator'>
        <Pagination
          count={totalPages}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default CharacterList;
