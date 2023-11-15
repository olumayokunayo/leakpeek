import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Discount = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#ffffff" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "30vh",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Discounts & Offers
          </Typography>
          <Typography sx={{ textAlign: "center", marginTop: "1rem" }}>
            Please check back next month for our discounts and special offers!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Discount;
