import React, { useState } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import tileData from "../components/tileData.json";
import ImgPopover from "../components/ImgPopover";
import { makeStyles } from "@material-ui/core/styles";

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
    background: "transparent",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

const Projects = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [tileState, setTileState] = useState({});

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2}>
          {tileData.map((tile) => (
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
                    onClick={() => {
                      setTileState({
                        ...tileState,
                        img: tile.img,
                        title: tile.title,
                      });
                      setAnchorEl({ top: 500, left: 400 });
                    }}
                    aria-label={`star ${tile.title}`}
                  >
                    <ZoomOutMapIcon className={classes.title} />
                  </IconButton>
                }
              />
              <ImgPopover
                id={id}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                tile={tileState}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default Projects;
