import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";

const ComponentSelect = (props) => {
  const {
    value,
    handleChange,
    options,
    label,
    fullWidth,
    helperText,
    required,
    disabledItem,
  } = props;
  const id = label;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth={fullWidth} required={required}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange} {...props}>
          {options.map(({ id, label }) => (
            <MenuItem key={id} value={id} disabled={label === disabledItem}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default ComponentSelect;
