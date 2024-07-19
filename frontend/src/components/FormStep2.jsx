import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
} from "@mui/material"; 

const FormStep2 = ({ formData, handleInputChange }) => (
  <Box>
    <Typography component="legend">Number of Wheels</Typography>
    <FormControl component="fieldset">
      <RadioGroup
        name="wheels"
        value={formData.wheels}
        onChange={handleInputChange}
      >
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
      </RadioGroup>
    </FormControl>
  </Box>
);

export default FormStep2;
