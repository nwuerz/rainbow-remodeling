import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    background:
      "linear-gradient(109.6deg,  rgba(255,24,134,1) 11.2%, rgba(252,232,68,1) 52%, rgba(53,178,239,1) 100.2%)",
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/images/curvy-lines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/images/roof-icon.png"
                alt="roof"
              />
              <Typography variant="h6" className={classes.title}>
                Roofing
              </Typography>
              <Typography variant="h5" align="center">
                {
                  "We specialize in the replacement of both commercial and residential roofing systems."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/images/paint-brush-icon.png"
                alt="paintbrush"
              />
              <Typography variant="h6" className={classes.title}>
                Painting
              </Typography>
              <Typography variant="h5" align="center">
                {
                  "Looking to freshen up your interior/exterior paint? We've got you covered!"
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/images/carpentry.png"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Carpentry
              </Typography>
              <Typography variant="h5" align="center">
                {
                  "From flooring and cabinetry to patio covers and siding, Rainbow has over 20 years of experience residential carpentry."
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
