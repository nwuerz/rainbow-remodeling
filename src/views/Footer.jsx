import React from "react";
import { Grid, Link, withStyles } from "@material-ui/core";

const styles = () => ({
  root: {
    backgroundColor: "black",
    color: "dimgray",
    marginTop: "100px",
    paddingTop: "60px",
    position: "relative",
  },
  phone: {
    textDecoration: "none",
    color: "white",
  },
  link: {
    paddingTop: "30px",
  },
});

function Copyright() {
  return (
    <>
      {"© "}
      {new Date().getFullYear()}
      {" Rainbow Remodeling & Roofing "}
    </>
  );
}

const Footer = (props) => {
  const { classes } = props;

  return (
    <Grid className={classes.root} container>
      <Grid item align="center" xs={12} s={12} md={12}>
        <Copyright />
      </Grid>
      <Grid item align="center" xs={12} s={12} md={12}>
        {"2817 Meadow Park"}
      </Grid>
      <Grid item align="center" xs={12} s={12} md={12}>
        {"Garland, TX 75040"}
      </Grid>
      <Grid item align="center" xs={12} s={12} md={12}>
        <a className={classes.phone} href="tel:469-855-6912">
          469.855.6912
        </a>
      </Grid>
      <Grid item align="center" xs={12} s={12} md={12}>
        {"rainbowremodeling@yahoo.com"}
      </Grid>
      <Grid className={classes.link} item align="center" xs={12} s={12} md={12}>
        {"Site by "}
        <Link color="secondary" href="https://nwuerz-portfolio.herokuapp.com">
          Nick Wuerz
        </Link>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
