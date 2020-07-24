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
    marginBottom: theme.spacing(10),
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
    height: "100%",
    width: "100%",
    // marginBottom: theme.spacing(7)
  },
  row: {
    marginTop: theme.spacing(5)
  },
  text: {
    marginTop: "15%"
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(15),
    alignItems: "left",
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
  link:
  {
    color: "blue",
    textDecoration: "none"
  }
});

function ClaimsHeader(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/images/curvy-lines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container>
          <Grid item xs={12} md={12}>
            <div className={classes.item}>
              <Typography variant="h2" align="center" className={classes.title}>
                {"Home Insurance Claims Assistance"}
              </Typography>
            </div>
          </Grid>
          <Grid container spacing={3} direction="row-reverse" className={classes.row}>
          <Grid item xs={12} s={6} md={6} lg={6}>
            <div>
              <img className={classes.image} align="right" src="/static/images/hail-water.jpg" alt="hail" />
            </div>
          </Grid>
          <Grid item xs={12} s={6} md={6} lg={6}>
            <div>
            <Typography className={classes.text} variant="h6" align="center" >
              {
                  "Due to the severitry of weather in Texas, thousands of roofs are replaced every year due to wind and hail damage. These roof replacements are typically covered by most homeowners' insurance policies. For many of our customers, this is the first and last claim they will ever file. Our experience and understanding of the claims process will help you maximize the return on your insurance investment."
              }
            </Typography>
            </div>
          </Grid>
          </Grid>
          <Grid container spacing={3} direction="row" className={classes.row}>
          <Grid item xs={12} s={6} md={6} lg={6}>
            <div>
              <img className={classes.image} src="/static/images/sign-here.jpg" alt="paperwork" />
            </div>
          </Grid>
          <Grid item xs={12} s={6} md={6} lg={6}>
            <div>
            <Typography className={classes.text} variant="h6" align="center">
              {
                "If you have recently filed a claim with your insurance company, received an insurance settlement, or would just like to know whether it makes sense to pursue an insurance claim, Rainbow can help." 
              }
              <a className={classes.link} href="tel:469-855-6912">  call us </a>
              {
                "today or"
              }
              <a href="/estimate" className={classes.link}> request a quote </a>
              {
                "and we will be able to help you in as little as 24 hours."
              }
            </Typography>
            </div>
          </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ClaimsHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClaimsHeader);
