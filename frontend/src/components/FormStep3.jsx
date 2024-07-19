import React, { useEffect, useState } from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material"; 
import { getVehicleTypes } from "../services/api";

const FormStep3 = ({ formData, handleInputChange }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData.wheels) {
      setLoading(true);
      getVehicleTypes(formData.wheels)
        .then((data) => {
          setVehicleTypes(data);
        })
        .catch((error) => {
          console.error("Failed to fetch vehicle types:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [formData.wheels]);

  return (
    <Box>
      <Typography component="legend">Type of Vehicle</Typography>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <CircularProgress />
        </Box>
      ) : (
        <FormControl component="fieldset">
          <RadioGroup
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
          >
            {vehicleTypes.map((type) => (
              <FormControlLabel
                key={type.id}
                value={type.id}
                control={<Radio />}
                label={type.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </Box>
  );
};

export default FormStep3;
