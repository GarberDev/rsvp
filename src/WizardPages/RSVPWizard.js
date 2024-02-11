import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  FormControlLabel,
  Switch,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import backgroundImg from "./just_paws.png";

const RSVPWizard = () => {
  const [step, setStep] = useState(1);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [names, setNames] = useState([{ name: "", isAdult: true }]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChangeNumberOfPeople = (e) => {
    setNumberOfPeople(e.target.value);
    const newNames = Array.from(
      { length: parseInt(e.target.value, 10) },
      () => ({ name: "", isAdult: true })
    );
    setNames(newNames);
  };

  const handleNameChange = (index, event) => {
    const updatedNames = names.map((item, i) =>
      i === index ? { ...item, name: event.target.value } : item
    );
    setNames(updatedNames);
  };

  const handleToggleChange = (index) => {
    const updatedNames = names.map((item, i) =>
      i === index ? { ...item, isAdult: !item.isAdult } : item
    );
    setNames(updatedNames);
  };
  const handleSubmit = () => {
    const formData = {
      numberOfPeople,
      names,
      email,
    };

    // Sending data to Google Sheets
    fetch(
      "https://script.google.com/macros/s/AKfycbzzf9IXQUL0-KBxgXFk2YagMecKSUikSbNWethqLt-TOlCr3GC9e-T4Cq_rS7oGhada/exec",
      {
        method: "POST",
        mode: "no-cors", // Required for CORS policies in Google Apps Script
        redirect: "follow",
        referrerPolicy: "no-referrer",
        contentType: "application/json",
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        console.log("Success:", response);

        if (email.trim() !== "") {
          const templateParams = {
            email,
            numberOfPeople,
            names: names
              .map(
                (name) => `${name.isAdult ? "Adult" : "Child"}: ${name.name}`
              )
              .join(", "),
          };

          const serviceId = "service_uq8fedr";
          const templateId = "template_vvwgrrm";
          const userId = "fTLbPrJxkPeJbTBYv";

          // Send email using EmailJS
          emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((emailResponse) => {
              console.log("Email successfully sent!", emailResponse);
            })
            .catch((emailError) =>
              console.error("Failed to send email. Error:", emailError)
            );
        }

        // Redirect to home page after submitting the form and optionally sending the email
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  switch (step) {
    case 1:
      return (
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh", // Ensure it covers the full viewport height
          }}
        >
          <Paper
            elevation={3}
            sx={{ p: 4, mt: 5, background: "rgba(255, 255, 255, 0.8)" }}
          >
            {" "}
            <Container maxWidth="sm">
              <Typography variant="h6" align="center">
                How many people are coming?
              </Typography>
              <TextField
                label="Number of People"
                type="number"
                fullWidth
                margin="normal"
                value={numberOfPeople}
                onChange={handleChangeNumberOfPeople}
              />
              <Box mt={2} display="flex" justifyContent="space-between" gap={2}>
                <Button variant="contained" onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button variant="contained" onClick={nextStep}>
                  Next
                </Button>
              </Box>
            </Container>
          </Paper>
        </div>
      );

    case 2:
      return (
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh", // Ensure it covers the full viewport height
          }}
        >
          <Paper
            elevation={3}
            sx={{ p: 4, mt: 5, background: "rgba(255, 255, 255, 0.8)" }}
          >
            <Container maxWidth="sm">
              <Typography align="center" variant="h6">
                Enter Names & Adult or Child
              </Typography>
              {names.map((item, index) => (
                <div key={index}>
                  <hr />

                  <TextField
                    label={`Guest Name ${index + 1}`}
                    fullWidth
                    margin="normal"
                    value={item.name}
                    onChange={(e) => handleNameChange(index, e)}
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={item.isAdult}
                        onChange={() => handleToggleChange(index)}
                      />
                    }
                    label={item.isAdult ? "Adult" : "Child"}
                  />
                </div>
              ))}

              <Box mt={2} display="flex" justifyContent="space-between" gap={2}>
                <Button variant="contained" onClick={prevStep}>
                  Back
                </Button>
                <Button variant="contained" onClick={nextStep}>
                  Next
                </Button>
              </Box>
            </Container>
          </Paper>
        </div>
      );
    case 3:
      return (
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh", // Ensure it covers the full viewport height
          }}
        >
          <Paper
            elevation={3}
            sx={{ p: 4, mt: 5, background: "rgba(255, 255, 255, 0.8)" }}
          >
            <Container maxWidth="sm">
              <Typography align="center" variant="h6">
                Email Confirmation *not required*
              </Typography>
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Box mt={2} display="flex" justifyContent="space-between" gap={2}>
                <Button variant="contained" onClick={prevStep}>
                  Back
                </Button>
                <Button variant="contained" onClick={handleSubmit}>
                  Confirm
                </Button>
              </Box>
            </Container>
          </Paper>
        </div>
      );
    default:
      return <div>Unknown step</div>;
  }
};

export default RSVPWizard;
