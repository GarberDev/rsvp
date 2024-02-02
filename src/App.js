import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import RSVPWizard from "./WizardPages/RSVPWizard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/rsvp" element={<RSVPWizard />} />
      </Routes>
    </Router>
  );
}

export default App;
