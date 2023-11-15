import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../shared/images/logo.png";
import NavlinkDiv from "./Navlinks";
const Navbar = () => {
  const isMobile = window.innerWidth <= 600;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed" // Set the position to fixed
        sx={{
          backgroundColor: "#252a2f",
          padding: isMobile ? "0.2rem 1rem" : "0.5rem 6rem",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Add a subtle box shadow
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo for larger screens */}
          <Link
            to="home"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
            smooth={true}
            duration={500}
          >
            <Box>
              <img src={logo} alt="logo" height={80} />
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Rubik", color: "#ef1f21", fontWeight: 600 }}
              >
                LeakPeek
              </Typography>
            </Box>
          </Link>

          {/* Hamburger button for smaller screens */}
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "block", md: "none", color: "#fff" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* NavLinks for larger screens */}
          <Box
            sx={{
              ml: "auto",
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
              },
            }}
          >
            <NavlinkDiv />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for smaller screens */}
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
        <Box
          sx={{
            width: "300px",
            height: "100vh",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ef1f21", // Set background color to red
          }}
        >
          {/* Logo in the sidebar */}
          <Box mb={3} sx={{ margin: "auto" }}>
            <img src={logo} alt="logo" height={100} />
          </Box>

          {/* NavLinks in the sidebar */}
          <Link
            to="about"
            style={{
              textDecoration: "none",
              color: "white",
              marginBottom: "30px",
              textAlign: "center",
            }}
            smooth={true}
            duration={500}
            onClick={handleDrawerClose}
          >
            <Typography variant="h6">About us</Typography>
          </Link>
          <Link
            to="services"
            style={{
              textDecoration: "none",
              color: "white",
              marginBottom: "30px",
              textAlign: "center",
            }}
            smooth={true}
            duration={500}
            onClick={handleDrawerClose}
          >
            <Typography variant="h6">Our Services</Typography>
          </Link>
          <Link
            to="testimonials"
            style={{
              textDecoration: "none",
              color: "white",
              marginBottom: "30px",
              textAlign: "center",
            }}
            smooth={true}
            duration={500}
            onClick={handleDrawerClose}
          >
            <Typography variant="h6">Testimonials</Typography>
          </Link>
          <Link
            to="offers"
            style={{
              textDecoration: "none",
              color: "white",
              marginBottom: "30px",
              textAlign: "center",
            }}
            smooth={true}
            duration={500}
            onClick={handleDrawerClose}
          >
            <Typography variant="h6">Offers</Typography>
          </Link>
          <Link
            to="free-quote"
            style={{
              textDecoration: "none",
              color: "white",
              marginBottom: "30px",
              textAlign: "center",
            }}
            smooth={true}
            duration={500}
            onClick={handleDrawerClose}
          >
            <Typography variant="h6">Free Quote</Typography>
          </Link>

          {/* Additional Typography at the end with call icon */}
          <Box mt="auto">
            <Typography variant="body1" color="white" fontFamily="monospace">
              We are available for any emergency.
            </Typography>
            <Box mt={2} display="flex" alignItems="center">
              <PhoneIcon sx={{ color: "white", marginRight: 1 }} />
              <Typography variant="body2" color="white">
                Call us: +1 123-456-7890
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
