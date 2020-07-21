import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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

const InsuranceSteps = (props) => {
  const { classes } = props;

  const steps = [
    {
      image: "/static/images/one.jpg",
      alt: "one",
      title: "get a roof inspection from a reputable, local roofing company",
      text: 
      "Many homeowners call their insurance company first, however, your roof may not have damage. In this case you may have this “claim” count against you anyway. Start with a free, no-obligation roof inspection and get a detailed inspection report."
    },
    {
      image: "/static/images/two.jpg",
      alt: "two",
      title: "If you have damage, make a claim with your insurance",
      text:
      "With your inspection report in hand you can file your claim on your homeowner’s policy with confidence. Your insurance company will likely ask you if your roof has already been inspected and if you have selected a contractor. Keep in mind, you can work with any roofing company you wish. It is entirely your choice."
    },
    {
      image: "/static/images/three.jpg",
      alt: "three",
      title: "Have your insurance adjuster and your roofer inspect your roof together",
      text:
      "When they inspect the roof together, they are more likely to be on the same page about what will be covered by insurance. This will save you a lot of back and forth phone calls. And you will be able to get the project started more quickly."
    },
    {
      image: "/static/images/four.jpg",
      alt: "four",
      title: "Schedule your roof replacement with your selected roofing company",
      text:
      "At this point in the process, our customers are assigned a Project Manager who is the homeowner’s point of contact for the duration of the project. Typical roof replacements take 1-2 days, start to finish. You are not required to be home when the work is being done."
    },
    {
      image: "/static/images/five.jpg",
      alt: "five",
      title: "Your deductible should be your only out-of-pocket expense",
      text:
      "Your insurance company will cut you a check and once your roof work is done you will pay that to your roofing contractor. A reputable company will not require money up front to do your roof."
    },
  ];

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
