import React from "react";
import SimpleHeader from "../views/SimpleHeader";
import Grid from "@material-ui/core/Grid";
import Footer from "../views/Footer";
import { withStyles, Typography } from "@material-ui/core";
import BackButton from "../components/BackButton";
import HomeButton from "../components/HomeButton";

const styles = {
  root: {
    marginTop: "100px",
  },
  link: {
    color: "blue",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const title = "program terms";

const ProgramTerms = (props) => {
  const { classes } = props;

  return (
    <>
      <BackButton />
      <HomeButton />
      <SimpleHeader title={title} />
      <Grid container>
        <Grid item lg={3}></Grid>
        <Grid className={classes.root} item lg={6} s={2}>
          <ul>
            <Typography variant="h5">
              <li>
                A referral is a homeowner who contracts with Rainbow for a new
                or replacement roof of at least 1,500 square feet. Insurance
                claims are welcome.
              </li>
              <li>
                A referral becomes a qualified customer once their roof is built
                and they have signed their Certificate of Completion.
              </li>
              <li>
                You may not refer your own primary residence into the program.
                If we have replaced your primary residence roof, you may refer a
                second home, rental property, etc.
              </li>
              <li>
                Referrals must be made through the{" "}
                <a className={classes.link} href="/referral">
                  referral form
                </a>{" "}
                prior to the referred homeowner having had any initial contact
                with Rainbow.
              </li>
              <li>
                A referral reward can not be used towards any outstanding
                balances with Raibow.
              </li>
              <li>
                There can be only 1 referrer per household submitting referrals
                into the Referral Rewards Program.
              </li>
              <li>
                The referrer is solely responsible for submitting their
                referrals into the Referral Rewards Program. Premier Roofing
                representatives are not responsible for entering in this
                information into the program for the referrer.
              </li>
            </Typography>
          </ul>
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default withStyles(styles)(ProgramTerms);
