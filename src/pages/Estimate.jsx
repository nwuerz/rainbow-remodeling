import React from "react";
import EstimateHeader from "../views/EstimateHeader";
import EstimateForm from "../views/EstimateForm";
import HomeButton from "../components/HomeButton";
import Footer from "../views/Footer";

const Estimate = () => {
  return (
    <>
      <HomeButton />
      <EstimateHeader />
      <EstimateForm />
      <Footer />
    </>
  );
};

export default Estimate;
