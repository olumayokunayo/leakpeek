// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Describe from "./components/Description/Describe";
import Offer from "./components/Offer/Offer";
import ReviewSection from "./components/Reviews/ReviewSection";
import Quote from "./components/Quote/Quote";
import Discount from "./components/Discounts/Discount";
import Enquiry from "./components/Enquiry/Enquiry";
import Footer from "./components/Footer/Footer";
import Bottom from "./components/Footer/Bottom";
import Heropage from "./components/HeroSection/Heropage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Heropage />
        <Describe />
        <Offer />
        <ReviewSection />
        <Quote />
        <Discount />
        <Enquiry />
        <Footer />
        {/* <Bottom /> */}
      </div>
    </Router>
  );
};

export default App;
