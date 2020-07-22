import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import insuranceSteps from "../components/insuranceSteps.json";

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0)
  },
  image: {
    height: "100px",
    width: "100px",
  },
  card: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  text: {

  }
});

const steps = insuranceSteps;

const InsuranceSteps = (props) => {
  const { classes } = props;

  return (
    <section>
    <Container>
      {steps.map((step) => (
        <Card key={step.title} className={classes.card}>
          <Container>
            <Grid
              style={{ alignItems: "center" }}
              container
              spacing={1}
              direction="row"
            >
              <Grid item xs={12} md={3}>
                <img
                  src={step.image}
                  alt={step.alt}
                  className={classes.image}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography  variant="h4">
                  {step.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={3} m={3} lg={3}>
              </Grid>
              <Grid item xs={9} m={9}>
                <Typography variant="h5">
                  {step.text}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Card>
      ))}
    </Container>
    </section>
  );
};

InsuranceSteps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsuranceSteps);
