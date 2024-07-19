import { useEffect, useState } from "react";
import "./App.css";
import { Box, CircularProgress, Snackbar, Alert } from "@mui/material";
import FormNavigation from "./components/FormNavigation";
import FormStep1 from "./components/FormStep1";
import FormStep2 from "./components/FormStep2";
import FormStep3 from "./components/FormStep3";
import FormStep4 from "./components/FormStep4";
import FormStep5 from "./components/FormStep5";
import { submitBooking } from "./services/api";

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
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleNext = () => {
    if (isCurrentStepValid()) {
      setError(null);
      setStep((prevStep) => prevStep + 1);
    } else {
      setError("Please complete the current step before proceeding.");
      setSnackbarOpen(true);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (newValue) => {
    setFormData((prevData) => ({ ...prevData, dateRange: newValue }));
  };

  const isCurrentStepValid = () => {
    const {
      firstName,
      lastName,
      wheels,
      vehicleType,
      vehicleModel,
      dateRange,
    } = formData;
    switch (step) {
      case 0:
        return firstName && lastName;
      case 1:
        return wheels;
      case 2:
        return vehicleType;
      case 3:
        return vehicleModel;
      case 4:
        return dateRange[0] && dateRange[1];
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    const stepComponents = [
      <FormStep1 formData={formData} handleInputChange={handleInputChange} />,
      <FormStep2 formData={formData} handleInputChange={handleInputChange} />,
      <FormStep3
        formData={formData}
        handleInputChange={handleInputChange}
        wheels={formData.wheels}
      />,
      <FormStep4
        formData={formData}
        handleInputChange={handleInputChange}
        vehicleType={formData.vehicleType}
      />,
      <FormStep5 formData={formData} handleDateChange={handleDateChange} />,
    ];
    return stepComponents[step] || "Unknown step";
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setError(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!formData.dateRange[0] || !formData.dateRange[1]) {
      setError("Please select a valid date range.");
      setSnackbarOpen(true);
      setLoading(false);
      return;
    }
    try {
      const bookingData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        vehicleId: formData.vehicleModel,
        startDate: new Date(formData.dateRange[0]).toISOString(),
        endDate: new Date(formData.dateRange[1]).toISOString(),
      };

      await submitBooking(bookingData);
      setSuccessMessage("Booking successful!");
      resetForm();
    } catch (error) {
      const errorMessage = error.response?.data?.error || "An error occurred.";
      setError(errorMessage);
      console.log("Error message:", errorMessage);
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      wheels: "",
      vehicleType: "",
      vehicleModel: "",
      dateRange: [null, null],
    });
    setStep(0);
    setError(null);
  };

  useEffect(() => {
    if (successMessage) {
      setSnackbarOpen(true);
    }
  }, [successMessage]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "90%", sm: 400, md: 400 },
        margin: "auto",
        marginTop: 20,
        padding: { xs: 2, sm: 3 },
        position: "relative",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {loading && (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {renderStepContent()}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        {error ? (
          <Alert
            onClose={handleSnackbarClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        ) : successMessage ? (
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {successMessage}
          </Alert>
        ) : null}
      </Snackbar>
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
