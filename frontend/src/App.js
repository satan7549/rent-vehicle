import { useState } from "react";
import "./App.css";
import { Box, CircularProgress, Snackbar, Alert } from "@mui/material";
import FormNavigation from "./components/FormNavigation";

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleType: "",
    vehicleModel: "",
    dateRange: [null, null],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    return;
  };

  return (
    <Box>
      <FormNavigation
        step={step}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
}

export default App;
