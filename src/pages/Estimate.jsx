import React from "react";
import EstimateHeader from "../views/EstimateHeader";
import EstimateForm from "../views/EstimateForm";
import HomeButton from "../components/HomeButton";

const Estimate = () => {

  return (
   <>
    <HomeButton />
    <EstimateHeader />
    <EstimateForm />
   </>
  );
};

export default Estimate;
