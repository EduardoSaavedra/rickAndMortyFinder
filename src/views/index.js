import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormFields } from "customeHooks";

import CharactersActions from "actions/charactersActions";
import Pagination from "@mui/material/Pagination";

import CharactersStore from "../stores /charactersStore.js";
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
    const { name, gender } = fields;
    const params = {
      page: search,
      name: name,
      gender: gender
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
    loadData()
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
  };

  return (
    <div className="character__layout">
      <h1 className='character__title'>Rick And Morty challenge</h1>
      <Filters
        fields={fields}
        handleFilters={handleFieldChange}
        onFilter={filter}
        cleanFilter={cleanFilter}
      />
      <p>Number of characters: {totalItems}</p>
      <Character characters={characters} />
      {totalPages !== 1 &&  <div className="character__paginator">
        <Pagination
          count={totalPages}
          onChange={handleChange}
          color="primary"
          shape="rounded"
        />
      </div>}     
    </div>
  );
};

export default CharacterList;
