import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import RSVPWizard from "./WizardPages/RSVPWizard";
import ReactGA from "react-ga4"; // Use the default export

// Your Google Analytics 4 measurement ID
const measurementId = "G-YKBSL15WCH";

// Initialize Google Analytics
ReactGA.initialize(measurementId);
console.log("Google Analytics initialized with ID:", measurementId);

function useTrackPageViews() {
  let location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;
    // Track page view with react-ga4 directly
    ReactGA.send({
      hitType: "pageview",
      page: pagePath,
    });
    console.log(`Page view tracked: ${pagePath}`);
  }, [location]);
}

function TrackPageViews() {
  useTrackPageViews(); // Use the hook to track page views
  return null; // This component doesn't render anything
}

function App() {
  return (
    <Router>
      <TrackPageViews />{" "}
      {/* Component to haimport React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
ndle page view tracking */}
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/rsvp" element={<RSVPWizard />} />
      </Routes>
    </Router>
  );
}

export default App;
