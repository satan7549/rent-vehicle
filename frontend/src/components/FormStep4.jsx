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
import { getVehicles } from "../services/api";

const FormStep4 = ({ formData, handleInputChange }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData.vehicleType) {
      setLoading(true);
      getVehicles(formData.vehicleType)
        .then((data) => {
          setVehicles(data);
        })
        .catch((error) => {
          console.error("Failed to fetch vehicles:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [formData.vehicleType]);


  return (
    <Box>
      <Typography component="legend">Specific Model</Typography>
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
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleInputChange}
          >
            {vehicles.map((vehicle) => (
              <FormControlLabel
                key={vehicle.id}
                value={vehicle.id}
                control={<Radio />}
                label={vehicle.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </Box>
  );
};

export default FormStep4;
