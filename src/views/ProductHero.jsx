import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "/static/images/metal-tiles.jpg";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const ProductHero = (props) => {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Rainbow Remodeling & Roofing
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Quality work at an affordable price.
      </Typography>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover our services
      </Typography>
    </ProductHeroLayout>
  );
};

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ProductHero);
