import React, { createRef } from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
  let history = useHistory();

  let button = createRef();

  return (
    <>
      <Fab
        id="button"
        style={{
          position: "fixed",
          right: "0px",
          backgroundColor: "transparent",
          zIndex: 1000
        }}
        onClick={() => history.push("/")}
        ref={button}
      >
        <HomeIcon />
      </Fab>
    </>
  );
};

export default HomeButton;
