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
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  }
});

const GalleryHeader = (props) => {
  const { classes } = props;

  return (
    <>
      <section className={classes.root}>
        <Container className={classes.container}>
          <img
            src="/static/images/curvy-lines.png"
            className={classes.curvyLines}
            alt="curvy lines"
          />
          <Grid container spacing={10}>
            <Grid item xs={12} md={12}>
              <div className={classes.item}>
                <Typography
                  variant="h2"
                  align="center"
                  className={classes.title}
                >
                  {"Rainbow's project gallery"}
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                >
                  {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

GalleryHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryHeader);
