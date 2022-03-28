import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from 'components/select'

const GENDERS = [
	{id: 'Female', label: 'Mujer'},
	{id: 'Male', label: 'Hombre'},
	{id: 'Genderless', label: 'Sin género'},
	{id: 'unknown', label: 'Desconocido'}
]

const Filters = ({ fields, handleFilters, onFilter, cleanFilter }) => {
  const { name, gender } = fields;
	const disabledButton = name || gender
  return (
    <div className="character__filters">
      <section className="character__fields">
        <TextField
          data-testid="name"
          label="Name"
          id="name"
          size="small"
          value={name}
          onChange={handleFilters}
        />
        <Select
          data-testid="gender"
          label="Gender"
          id="gender"
          value={gender}
          size="small"
          fullWidth
          onChange={handleFilters}
					options={GENDERS}
        />         
      </section>
      <section className="character__fields">
        <Button variant="contained" onClick={onFilter} disabled={!disabledButton}>
          Filter
        </Button>
        <Button variant="outlined" onClick={cleanFilter}>
          Clean
        </Button>
      </section>
    </div>
  );
};

export default Filters;
