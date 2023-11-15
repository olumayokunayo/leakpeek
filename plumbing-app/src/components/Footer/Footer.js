import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../shared/images/logo.png";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#cb1f24",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <NavLink
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box>
                <img src={logo} alt="logo" height={80} />
              </Box>
              <Box ml={1}>
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "Rubik", color: "#fff" }}
                >
                  LeakPeek
                </Typography>
              </Box>
            </NavLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ color: "#fbf4f3" }}>Contact Us</Typography>
            <address
              style={{
                width: "80%",
                fontStyle: "normal",
                marginTop: "1rem",
                color: "#f4d6d5",
              }}
            >
              4 Closeburn Avenue Prahran East VIC 3181 (01) 23 457 689
            </address>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ color: "#fbf4f3" }}>Popular Services</Typography>
            <div style={{ marginTop: "1rem", color: "#f4d6d5" }}>
              <Typography>Blocked Drains</Typography>
              <Typography>Gas Fitting</Typography>
              <Typography>Hot Water Heaters</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ color: "#fbf4f3" }}>
              Review us on Google!
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "#000",
          width: "100%",
          //   padding: "1rem",
          marginTop: "1rem",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "#fff" }}>
          &copy; Leak Peek Plumbing 2020 | Lic. No: 12345 | ABN: 11 222 333 444
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
