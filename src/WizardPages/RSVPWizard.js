import React, { useState } from "react";
import {
  Container,
  Step,
  StepLabel,
  Stepper,
  Button,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const steps = [
  "Number of Guests",
  "Names and Ages",
  "Food Restrictions or Comments",
  "Email Confirmation",
  "Thank You",
];

const RSVPWizard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    numberOfGuests: "",
    names: "",
    comments: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <TextField
            label="Number of Guests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            fullWidth
          />
        );
      case 1:
        return (
          <TextField
            label="Names and Ages (e.g., John-34, Jane-30, Alex-5)"
            name="names"
            value={formData.names}
            onChange={handleChange}
            fullWidth
            multiline
          />
        );
      case 2:
        return (
          <TextField
            label="Food Restrictions or Comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            fullWidth
            multiline
          />
        );
      case 3:
        return (
          <TextField
            label="Your Email for Confirmation"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
        );
      case 4:
        return (
          <Typography variant="body1">
            Thank you for your RSVP!{" "}
            {formData.email &&
              `A confirmation email will be sent to ${formData.email}.`}
          </Typography>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Container maxWidth="sm">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 3 }}>
        {getStepContent(activeStep)}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          {activeStep > 0 && (
            <Button onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" onClick={() => navigate("/")}>
              Return to Home
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default RSVPWizard;
