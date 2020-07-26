import React from "react";
import Button from "@material-ui/core/Button";

const SubmitButton = (props) => {
  const {
    referrerFirstName,
    referrerLastName,
    referrerEmail,
    referrerNumber,
    referrerAddress,
    referrerZip,
    referralFirstName,
    referralLastName,
    referralEmail,
    referralNumber,
    referralAddress,
    referralZip,
    acceptedTerms
  } = props.currentUser;

  if (referrerFirstName && referrerLastName && referrerEmail && referrerNumber && referrerAddress && referrerZip && referralFirstName && referralLastName && referralEmail && referralNumber && referralAddress && referralZip !== "" && acceptedTerms === true) {
    return (
      <Button
        type="submit"
        style={{ backgroundColor: "black", color: "white" }}
        variant="outlined"
      >
        Submit
      </Button>
    );
  }
  return (
    <Button
      disabled
      align="center"
      style={{ backgroundColor: "grey", color: "white" }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
