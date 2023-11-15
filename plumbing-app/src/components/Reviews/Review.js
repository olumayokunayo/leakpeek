// ReviewItem.js
import React from "react";
import { Box, Typography, Rating, Paper, Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const ReviewItem = ({ name, date, rating, text, image }) => (
  <Container maxWidth="xs" sx={{ position: "relative", padding: "1rem" }}>
    <Paper elevation={2} sx={{ padding: "0 1rem " }}>
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {date}
        </Typography>
      </Box>
      <Box sx={{ my: 1 }}>
        <Rating
          name="read-only"
          value={rating}
          precision={0.5}
          readOnly
          size="small"
        />
      </Box>
      <Typography variant="body1" sx={{ color: "#7f7f7f" }}>
        <FormatQuoteIcon sx={{ color: "gray" }} /> {""}
        {text}
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 20,
          right: 27,
        }}
      >
        <img
          src={image}
          alt={name}
          height={50}
          width={50}
          style={{ borderRadius: "50%" }}
        />
      </div>
    </Paper>
    <Box
      sx={{
        bgcolor: "red",
        position: "absolute",
        bottom: 30,
        left: "100%",
        marginLeft: "-44px",
        width: 0,
        height: 0,
        borderTop: "20px solid white",
        borderRight: "20px solid transparent",
        zIndex: 1,
      }}
    />
  </Container>
);

export default ReviewItem;
