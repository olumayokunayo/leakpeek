import React from "react";
import { Link } from "react-scroll";
import Container from "@mui/material/Container";

const NavlinkDiv = () => {
  const NavStyle = {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1.1rem",
    cursor: "pointer",
  };

  return (
    <React.Fragment>
      <Container>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Link to="about" style={NavStyle} smooth={true} duration={500}>
            About us
          </Link>
          {/* <Link to="services" style={NavStyle} smooth={true} duration={500}>
            Our Services
          </Link> */}
          <Link to="testimonials" style={NavStyle} smooth={true} duration={500}>
            Reviews
          </Link>
          <Link to="offers" style={NavStyle} smooth={true} duration={500}>
            Offers
          </Link>
          <Link to="free-quote" style={NavStyle} smooth={true} duration={500}>
            Free Quote
          </Link>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default NavlinkDiv;
