import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";

const Quote = () => {
  const phoneNumber = "0123456789";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "red",
        padding: "1rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "#fefefe", marginBottom: "1rem" }}>
        Call us for a quote today
      </Typography>
      <Box
        onClick={handlePhoneClick}
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          backgroundColor: "#cb1f24",
          padding: "0.5rem",
          borderRadius: "8px",
        }}
      >
        <CallIcon sx={{ color: "#fff" }} />
        <Typography variant="h5" sx={{ color: "#fff" }}>
          {phoneNumber}
        </Typography>
      </Box>
    </Container>
  );
};

export default Quote;
