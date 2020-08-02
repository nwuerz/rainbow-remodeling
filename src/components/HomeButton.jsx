import React, { useRef, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
  let history = useHistory();

  const button = useRef();

  useEffect(() => button.current && button.current.focus());

  return (
    <>
      <Fab
        id="button"
        style={{
          position: "absolute",
          right: "0px",
          backgroundColor: "transparent",
        }}
        onClick={() => history.push("/")}
        buttonRef={button}
      >
        <HomeIcon />
      </Fab>
    </>
  );
};

export default HomeButton;
