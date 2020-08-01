import React from "react";
import HomeButton from "../components/HomeButton";
import ClaimsHeader from "../views/ClaimsHeader";
import InsuranceSteps from "../views/InsuranceSteps";
import Footer from "../views/Footer";

const Claims = () => {
  return (
    <>
      <HomeButton />
      <ClaimsHeader />
      <InsuranceSteps />
      <Footer />
    </>
  );
};

export default Claims;
