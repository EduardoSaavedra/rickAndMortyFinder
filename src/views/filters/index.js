import React from "react";
import TextField from "@mui/material/TextField";

const Filters = () => {
  return (
    <div className="character-container">
      <TextField
        label="Nombre"
        id="outlined-size-small"
        defaultValue="Small"
        size="small"
      />
    </div>
  );
};

export default Filters;
