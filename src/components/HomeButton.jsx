import React, { useRef, useEffect } from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
  let history = useHistory();

  const useInitialFocus = (ref, title) => {
    useEffect(() => {
      ref.current.focus();
      document.title = title;
    }, [ref, title]);
  };

  const mainRef = useRef(null);
  useInitialFocus(mainRef, "Home Button");

  return (
    <>
      <Fab
        style={{
          position: "absolute",
          right: "0px",
          backgroundColor: "transparent",
        }}
        onClick={() => history.push("/")}
        ref={mainRef}
      >
        <HomeIcon />
      </Fab>
    </>
  );
};

export default HomeButton;
