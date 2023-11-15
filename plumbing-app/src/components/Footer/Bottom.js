import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Bottom = () => {
  return (
    <Container maxWidth="xl">
      <Box style={{ backgroundColor: "#000" }}>
        <Typography sx={{ color: "#cecece", textAlign: "center" }}>
          &copy; Leek Peek Plumbing 2020 | Lic. No: 12345 | ABN: 11 222 333 444
        </Typography>
      </Box>
    </Container>
  );
};

export default Bottom;
