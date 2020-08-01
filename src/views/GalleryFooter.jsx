import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    background:
      "linear-gradient(109.6deg,  rgba(255,24,134,1) 11.2%, rgba(252,232,68,1) 52%, rgba(53,178,239,1) 100.2%)",
  },
  text: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(25),
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
});

const GalleryFooter = (props) => {
  const { classes } = props;

  return (
    <>
      <Grid className={classes.root} container>
        <Grid className={classes.text} item xs={12} m={12}>
          <Typography variant="h4" align="center">
            <a className={classes.link} href="tel:469-855-6912">
              call now{" "}
            </a>
            or
            <a className={classes.link} href="/estimate">
              {" "}
              request a free estimate
            </a>
            !
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

GalleryFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryFooter);
