import React from "react";
import { Button, Container, Typography, Grid } from "@mui/material";
import Input from "../shared/FormElements/Input";

const Enquiry = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#f6f9fd",
        padding: "2rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
      id="free-quote"
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#d75e5c",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          Enquiry Form
        </Typography>
        <Typography sx={{ textAlign: "center", marginBottom: "2rem" }}>
          Send us your information and we will get back to you shortly
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Input
              element="input"
              type="text"
              placeholder="First name"
              label="First Name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              element="input"
              type="text"
              placeholder="Last name"
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              element="input"
              type="email"
              placeholder="Email"
              label="Email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              element="input"
              type="text"
              placeholder="Subject"
              label="Subject"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              element="textarea"
              type="text"
              placeholder="Message"
              label="Message"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                marginTop: "1rem",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0.8rem 1rem",
                backgroundColor: "#cb1f24",
                color: "#fff",
                "&:hover": { backgroundColor: "#ef1f21" },
              }}
            >
              SEND ENQUIRY
            </Button>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Or email us at
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Leakpeekplumbing@us
        </Typography>
      </Container>
    </Container>
  );
};

export default Enquiry;
