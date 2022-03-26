import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from 'components/select'

const GENDERS = [
	{id: 'Female', label: 'Mujer'},
	{id: 'Male', label: 'Hombre'},
	{id: 'Genderless', label: 'Sin género'}
]

const Filters = ({ fields, handleFilters, onFilter, cleanFilter }) => {
  const { name, gender } = fields;
  return (
    <div className="character-filters">
      <section className="character-fields">
        <TextField
          data-testid="name"
          label="Nombre"
          id="name"
          size="small"
          value={name}
          onChange={handleFilters}
        />
        <Select
          data-testid="gender"
          label="Género"
          id="gender"
          value={gender}
          size="small"
          fullWidth
          onChange={handleFilters}
					options={GENDERS}
        />         
      </section>
      <section className="character-fields">
        <Button variant="contained" onClick={onFilter}>
          Filtrar
        </Button>
        <Button variant="outlined" onClick={cleanFilter}>
          Limpiar
        </Button>
      </section>
    </div>
  );
};

export default Filters;
