import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import "@fontsource/roboto";

const Describe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerStyles = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem 0",
    height: "100vh",
  };

  const leftBoxStyles = {
    width: isMobile ? "100%" : "40%",
    padding: "1rem",
  };

  const rightBoxStyles = {
    width: isMobile ? "100%" : "50%",
    padding: "1rem",
    color: "#cc2225",
    marginTop: isMobile ? "2rem" : "0",
    textAlign: isMobile ? "center" : "left",
  };

  const textColor = {
    color: "#515151",
    fontWeight: 500,
    margin: "1rem 0",
    lineHeight: 1.6,
  };

  return (
    <Container maxWidth="xl" id="about">
      <Container sx={containerStyles}>
        <Box sx={leftBoxStyles}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
              color: "#1a2131",
            }}
          >
            Who we are
          </Typography>
          <Typography sx={textColor}>
            Leak Peek Plumbing has been established for over 25 years and is
            based in inner city, Prahran. We currently employ 6 staff members,
            the majority of whom have been part of the team for over 10 years.
          </Typography>
          <Typography sx={textColor}>
            We offer free quotes on jobs that require more than a house call.
            For more information, fill out the contact form, and we will contact
            you soon.
          </Typography>
        </Box>
        <Box sx={rightBoxStyles}>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Plumbing Problem?
          </Typography>
          <Typography variant="h5" sx={{ color: "#282828" }}>
            We can help you!
          </Typography>
          <Button
            sx={{
              marginTop: "1rem",
              backgroundColor: "#cb1f24",
              color: "#fff",
              "&:hover": { backgroundColor: "#ef1f21" },
              width: isMobile ? "100%" : "40%",
            }}
          >
            GET QUOTE
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default Describe;
