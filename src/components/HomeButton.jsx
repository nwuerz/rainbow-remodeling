import React from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
    let history = useHistory();

  return (
    <>
      <Fab autoFocus style={{position: "absolute", right: "0px", backgroundColor: "transparent"}} onClick={()=>history.push("/")} >
        <HomeIcon />
      </Fab>
    </>
  );
};

export default HomeButton;
