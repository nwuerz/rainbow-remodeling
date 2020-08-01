import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#ff3366",
    color: "white",
    marginTop: theme.spacing(10),
  },
}));

const ReferralButton = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid item align="center">
        <Button className={classes.button} onClick={props.setState}>
          Submit a Referral!
        </Button>
      </Grid>
    </>
  );
};

export default ReferralButton;
