import React from "react";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  let history = useHistory();

  return (
    <>
      <Fab
        autoFocus
        style={{
          position: "absolute",
          left: "0px",
          backgroundColor: "transparent",
        }}
        onClick={() => history.push("/referral")}
      >
        <ArrowBackIcon />
      </Fab>
    </>
  );
};

export default BackButton;
