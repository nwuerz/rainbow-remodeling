import React from "react";
import Popover from "@material-ui/core/Popover";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

const ImgPopover = (props) => {
  const classes = useStyles();

  const open = Boolean(props.anchorEl);

  const handleClose = () => {
    props.setAnchorEl(null);
    console.log(props.tile.img);
  };

  return (
    <>
      <Popover
        id={props.id}
        open={open}
        anchorEl={props.anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <CloseIcon onClick={handleClose} className={classes.closeButton} />
        <img
          src={props.tile.img}
          alt={props.tile.title}
          className={classes.image}
        />
        <h3>{props.tile.title}</h3>
      </Popover>
    </>
  );
};

export default ImgPopover;
