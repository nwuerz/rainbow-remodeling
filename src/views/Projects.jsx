import React, { useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Popover
} from "@material-ui/core";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import CloseIcon from '@material-ui/icons/Close';
import tileData from "../components/tileData.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  gridTile: {
    height: "100%",
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0
  }
}));

const Projects = () => {
  const classes = useStyles();

  const [anchorPosition, setAnchorPosition] = useState(null);

  const open = Boolean(anchorPosition);
  const id = open ? "simple-popover" : undefined;

  const handleClick = () => {
    setAnchorPosition({ top: 200, left: 400 });
  };

  const handleClose = () => {
    setAnchorPosition(null);
  };

  return (
    <>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2}>
          {tileData.map((tile, index) => (
            <GridListTile key={tile.img} rows={2}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton
                    onClick={handleClick}
                    aria-label={`star ${tile.title}`}
                  >
                    <ZoomOutMapIcon className={classes.title} />
                  </IconButton>
                }
              />
              <Popover
                id={id}
                open={open}
                anchorPosition={anchorPosition}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                className={classes.popover}
              >
                <CloseIcon onClick={handleClose} className={classes.closeButton}/>
                <img src={tile.img} alt={tile.title} />
                <h3>{tile.title}</h3>
              </Popover>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default Projects;
