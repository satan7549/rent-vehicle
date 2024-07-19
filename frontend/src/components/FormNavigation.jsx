import React from "react";
import { Box, Button } from "@mui/material";

const FormNavigation = ({ step, handleBack, handleNext, handleSubmit }) => (
  <Box display="flex" justifyContent="space-between" marginTop={2}>
    {/* {step > 0 && (
      <Button variant="contained" onClick={handleBack}>
        Back
      </Button>
    )} */}
    {step < 4 ? (
      <Button variant="contained" fullWidth onClick={handleNext}>
        Next
      </Button>
    ) : (
      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    )}
  </Box>
);

export default FormNavigation;
