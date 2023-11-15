// ReviewSection.js
import React from "react";
import Slider from "react-slick";
import { Container, Typography, useMediaQuery } from "@mui/material";
import backgroundImg from "../shared/images/plumbingbackground.jpg";
import reviewImg1 from "../shared/images/review1.jpg";
import reviewImg2 from "../shared/images/review2.jpg";
import reviewImg3 from "../shared/images/review3.jpg";
import ReviewItem from "./Review";
const DUMMY_REVIEWS = [
  {
    id: "r1",
    name: "John Doe",
    date: "January 1, 2023",
    rating: 4.5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: reviewImg1,
  },
  {
    id: "r2",
    name: "Jane Ann",
    date: "January 1, 2023",
    rating: 4.5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: reviewImg2,
  },
  {
    id: "r3",
    name: "Samuel Agatha",
    date: "January 1, 2023",
    rating: 4.5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: reviewImg3,
  },
  // Add more reviews as needed
];

const ReviewSection = () => {
  const dotStyles = {
    width: "8px",
    height: "8px",
    margin: "0 4px",
    borderRadius: "50%",
    backgroundColor: "#d75e5c", // Set the dot color to white
    cursor: "pointer",
  };

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    customPaging: () => <div style={dotStyles} />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjusted to show three reviews in one slide
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        background: `url(${backgroundImg}) center/cover no-repeat`,
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="testimonials"
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            margin: "auto",
            fontWeight: 600,
            color: "#fff",
            padding: "2rem",
          }}
        >
          Happy Customer Reviews
        </Typography>
        <Slider {...settings}>
          {DUMMY_REVIEWS.map((review) => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default ReviewSection;
