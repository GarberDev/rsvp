import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Container, Paper, Box } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRSVPClick = () => {
    navigate("/rsvp");
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
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
          <strong>Event Address:</strong> 24316 W Venturi Dr, Valencia, CA 91355
        </Typography>
        <Typography variant="body1">
          <strong>Contact:</strong> (661) 714-3945
        </Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={handleRSVPClick}>
        Click Here to RSVP
      </Button>
      <Typography paragraph mt={2}>
        In lieu of gifts, we welcome you to bring your child's favorite book as
        a gift. Aurora's passion for reading will be ignited by the stories in
        the books you give her.
      </Typography>
      <Typography paragraph>
        We eagerly await your company to fill the day with laughter, stories,
        and the joy of togetherness.
      </Typography>
    </Paper>
  );
};

export default LandingPage;
