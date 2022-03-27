import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormFields } from "customeHooks";

import CharactersActions from "actions/charactersActions";
import Pagination from "@mui/material/Pagination";

import CharactersStore from "/Users/usuario-rtd/Desktop/challenge/src/stores /charactersStore.js";
import Character from "./characters";
import Filters from "./filters";

const getCurrentState = () => ({
  characters: CharactersStore.getCharactersList(),
  totalPages: CharactersStore.getTotalPages(),
  totalItems: CharactersStore.getTotalItems()
});

const CharacterList = () => {
  const urlPath = useLocation();
  let navigate = useNavigate();
  const [characters, setCharacters] = useState(getCurrentState().characters);
  const [totalPages, setTotalPages] = useState(getCurrentState().totalPages);
  const [totalItems, setTotalItems] = useState(getCurrentState().totalItems);

  const [location, setLocation] = useState(urlPath);
  const [fields, handleFieldChange, setValues] = useFormFields({
    name: "",
    gender: "",
  });

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
    const { characters, totalPages, totalItems } = getCurrentState()
    setTotalPages(totalPages);
    setCharacters(characters);
    setTotalItems(totalItems)
  };

  const filter = () => {
    const { name, gender } = fields;
    const params = {
      name: name,
      gender: gender
    };
    CharactersActions.getCharactersList(params);

    setValues({name: '', gender: ''})
    navigate(`/`, { replace: true });
  };

  const cleanFilter = () => {
    CharactersActions.getCharactersList({})
    setValues({name: '', gender: ''})
    navigate(`/`, { replace: true });
  }

  const handleChange = (event, value) => {
    setLocation((prevInvoice) => ({
      ...prevInvoice,
      search: value,
    }));
    navigate(`/?page=${value}`, { replace: true });
  };

  return (
    <div className="character-layout">
      <Filters
        fields={fields}
        handleFilters={handleFieldChange}
        onFilter={filter}
        cleanFilter={cleanFilter}
      />
      <p>Número de personajes: {totalItems}</p>
      <Character characters={characters} />
      <div className="character-paginator">
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
