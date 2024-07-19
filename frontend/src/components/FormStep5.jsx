import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const FormStep5 = ({ formData, handleDateChange }) => {
  const today = new Date().toISOString().split("T")[0];
  const [startDate, endDate] = formData.dateRange;

  const handleStartDateChange = (event) => {
    const newStartDate = event.target.value;
    // If new start date is after the current end date, update end date to the new start date
    const newEndDate =
      endDate && new Date(newStartDate) > new Date(endDate)
        ? newStartDate
        : endDate;
    handleDateChange([newStartDate, newEndDate]);
  };

  const handleEndDateChange = (event) => {
    const newEndDate = event.target.value;
    // If new end date is before the current start date, update start date to the new end date
    const newStartDate =
      startDate && new Date(newEndDate) < new Date(startDate)
        ? newEndDate
        : startDate;
    handleDateChange([newStartDate, newEndDate]);
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
