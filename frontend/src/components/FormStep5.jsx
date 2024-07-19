import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const FormStep5 = ({ formData, handleDateChange }) => {
  const today = new Date().toISOString().split("T")[0];
  const startDate = formData.dateRange[0] || today;

  const handleStartDateChange = (event) => {
    handleDateChange([event.target.value, formData.dateRange[1]]);
  };
 
  const handleEndDateChange = (event) => {
    handleDateChange([formData.dateRange[0], event.target.value]);
  };

  return (
    <Box>
      <Typography>Date range</Typography>
      <Box display="flex" alignItems="center">
        <TextField
          label="Start Date"
          type="date"
          value={formData.dateRange[0] || ""}
          onChange={handleStartDateChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
          inputProps={{ min: today }}
        />
        <Box sx={{ mx: 2 }}>to</Box>
        <TextField
          label="End Date"
          type="date"
          value={formData.dateRange[1] || ""}
          onChange={handleEndDateChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
          inputProps={{ min: startDate }}
        />
      </Box>
    </Box>
  );
};

export default FormStep5;
