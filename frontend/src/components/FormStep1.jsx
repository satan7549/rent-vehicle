import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const FormStep1 = ({ formData, handleInputChange }) => (
  <Box>
    <Typography variant="h6" gutterBottom>
      First, What's your name?
    </Typography>
    <TextField
      label="First Name" 
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Last Name"
      name="lastName"
      value={formData.lastName}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
  </Box>
);

export default FormStep1;
