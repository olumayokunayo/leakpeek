import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import plunger from "../shared/images/plunger.png";
import cctv from "../shared/images/cctv-camera.png";
import gastesting from "../shared/images/emission.png";
import hotwater from "../shared/images/bathtub.png";
import maintenance from "../shared/images/pipe-wrench.png";
import burstpipe from "../shared/images/burst.png";

const Offer = () => {
  const isMobile = window.innerWidth <= 600;

  const iconStyle = {
    height: isMobile ? "60%" : "10%",
    width: "80%",
    objectFit: "contain",
  };

  const gridStyle = {
    padding: "1rem",
    height: isMobile ? "auto" : "20%",
    width: isMobile ? "100px" : "",
    color: "red",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    margin: "1rem",
  };

  const typoStyle = {
    color: "#ca1f24",
    textAlign: "center",
    marginTop: isMobile ? "-0.1rem" : "1rem",
    fontSize: isMobile ? "0.8rem" : "",
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#f6f9fd",
        height: "120vh",
        display: "flex",
        alignItems: "center",
      }}
      id="offers"
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            width: isMobile ? "100%" : "60%",
            margin: "auto",
            fontWeight: 600,
            color: "#13182b",
            padding: isMobile ? "1rem" : "2rem",
            fontSize: isMobile ? "1.2rem" : "2rem",
          }}
        >
          We offer Commercial, Residential & Emergency Services
        </Typography>
        <Container sx={{ marginLeft: isMobile ? "10%" : "10%" }}>
          <Grid container spacing={isMobile ? 2 : 4}>
            <Grid item xs={4} sm={6} md={3} sx={gridStyle}>
              <img src={plunger} alt="plunger" style={iconStyle} />
              <Typography sx={typoStyle}>Blocked Sewers</Typography>
            </Grid>
            <Grid item xs={4} sm={6} md={3} sx={gridStyle}>
              <img src={cctv} alt="cctv drains" style={iconStyle} />
              <Typography sx={typoStyle}>CCTV Drains</Typography>
            </Grid>
            <Grid item xs={4} sm={6} md={3} sx={gridStyle}>
              <img src={gastesting} alt="gas-testing" style={iconStyle} />
              <Typography sx={typoStyle}>Gas Appliance Testing</Typography>
            </Grid>
            <Grid item xs={4} sm={6} md={3} sx={gridStyle}>
              <img src={burstpipe} alt="burst pipe" style={iconStyle} />
              <Typography sx={typoStyle}>Burst Pipes</Typography>
            </Grid>
            <Grid item xs={4} sm={6} md={3} sx={gridStyle}>
              <img src={hotwater} alt="hot-water" style={iconStyle} />
              <Typography sx={typoStyle}>Hot water services</Typography>
            </Grid>
            <Grid item xs={4} sm={6} md={3} sx={gridStyle}>
              <img
                src={maintenance}
                alt="general-maintenance"
                style={iconStyle}
              />
              <Typography sx={typoStyle}>General Maintenance</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
};

export default Offer;
