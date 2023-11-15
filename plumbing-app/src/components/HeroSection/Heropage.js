import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import logo from "../shared/images/logo.png";
import backgroundImg from "../shared/images/plumbinghero.jpg";
import "@fontsource/rubik";

const Heropage = () => {
  const iconBox = {
    display: "flex",
    gap: "1rem",
  };
  const textColor = {
    color: "#f1f1f1",
    textAlign: "left",
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "6rem",
      }}
      id="home"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)", // Blur effect
        }}
      />
      <Box
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.8)",
          width: "80%",
          padding: "1rem",
          zIndex: 1,
          borderRadius: "10px",
        }}
      >
        {/* <img src={logo} alt="logo" height={80} /> */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Rubik",
            color: "#fdfdfd",
            fontWeight: 600,
            fontSize: "1.6rem",
            textAlign: "center",
            my: 2,
          }}
        >
          We bring you the quirkiest plumbing expertise in Melbourne, available
          24/7! Our pipes never sleep, and neither do we.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Information Grid */}
          {[
            "Trained Plumbing Professionals",
            "Locally owned and operated",
            "24/7 Emergency Service",
            // Additional Information
            "Licensed and Insured",
            "Quality Workmanship",
            "Customer Satisfaction Guaranteed",
          ].map((info, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <Box sx={iconBox}>
                <CheckCircleIcon sx={{ color: "#ff0302" }} />
                <Typography sx={textColor}>{info}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button
          sx={{
            marginTop: "3rem",
            padding: "0.8rem 1rem",
            backgroundColor: "#cb1f24",
            color: "#fff",
            "&:hover": { backgroundColor: "#ef1f21" },
          }}
        >
          GET QUOTE
        </Button>
      </Box>
    </Container>
  );
};

export default Heropage;
