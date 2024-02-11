import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Paper, Box } from "@mui/material";
import Link from "@mui/material/Link";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRSVPClick = () => {
    navigate("/rsvp");
  };

  const address = "24316 W Venturi Dr, Valencia, CA 91355";
  const eventTitle = encodeURIComponent("Aurora's Fourth Birthday");
  const eventDetails = encodeURIComponent(
    "Come celebrate Aurora's fourth birthday with us! No gifts are necessary, your presence is the most cherished gift. For more details visit: https://www.jaimiegarber.com"
  );

  const location = encodeURIComponent(address);
  const startTime = "20240316T143000";
  const endTime = "20240316T170000";
  const calendarEventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${location}&dates=${startTime}/${endTime}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;

  return (
    <div
      style={{
        backgroundImage: `url('/wallpaper_paw.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "absolute",
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, mt: 5, background: "rgba(255, 255, 255, 0.8)" }}
      >
        {" "}
        <Typography variant="h4" gutterBottom>
          You're Cordially Invited! Aurora's Fourth Birthday
        </Typography>
        <Typography paragraph>
          Celebrate with us as we mark a special occasion for Aurora. Your
          presence is the most cherished gift, so no other gifts are necessary.
        </Typography>
        <Box mb={2}>
          <Typography variant="body1">
            <strong>Date:</strong> March 16th, 2024
          </Typography>
          <Typography variant="body1">
            <strong>Time:</strong> 2:30pm
          </Typography>
          <Typography variant="body1">
            <strong>Event Address:</strong> {address}
          </Typography>
          <Typography variant="body1">
            <strong>Contact:</strong> (661) 714-3945
          </Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={handleRSVPClick}>
          Click Here to RSVP
        </Button>
        <Box mt={2} display="flex" gap={2}>
          <Button
            variant="outlined"
            color="secondary"
            href={calendarEventUrl}
            target="_blank"
            rel="noopener"
          >
            Google Calendar
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            href={mapsUrl}
            target="_blank"
            rel="noopener"
          >
            Open in Maps
          </Button>
        </Box>
        <Typography paragraph mt={2}>
          In lieu of gifts, we welcome you to bring your child's favorite book
          as a gift. Aurora's passion for reading will be ignited by the stories
          in the books you give her.
        </Typography>
        <Typography paragraph>
          We eagerly await your company to fill the day with laughter, stories,
          and the joy of togetherness.
        </Typography>
      </Paper>
    </div>
  );
};

export default LandingPage;
