import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Container,
  Divider,
  Grid,
  Button,
  Switch,
  TextField,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from "@material-ui/core";

// const backgroundImage =
//   "/static/images/pattern.jpg";

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "center",
    // backgroundImage: `url(${backgroundImage})`,
    // backgroundPosition: "center"
  },
  input: {
      background: "white"
  },
  button: {
    background: "black", 
    color: "white"
  }
}));

const EstimateForm = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <Container>
        <FormControl autoComplete="off" noValidate>
          <CardHeader
            title="Let us know how we can help by filling out the form below and we will be in touch to schedule your inspection!"
            align="center"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={11}>
                <TextField
                  fullWidth
                  label="First name"
                  margin="dense"
                  name="firstName"
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={6} xs={11}>
                <TextField
                  fullWidth
                  label="Last name"
                  margin="dense"
                  name="lastName"
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={6} xs={11}>
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="dense"
                  name="email"
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={6} xs={11}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="dense"
                  name="phone"
                  type="number"
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={12} xs={11}>
                <TextField
                  fullWidth
                  label="Address"
                  margin="dense"
                  name="username"
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={12} xs={11}>
                <FormLabel component="legend">Please select all that apply:</FormLabel>
                <FormGroup align="center">
                    <Grid item md={12} xs={11}>
                    <FormControlLabel
                    control={<Switch name="claim" />}
                    label="I will be filing an insurance Claim"
                    />
                    <FormControlLabel
                    control={<Switch name="adjuster" />}
                    label="An adjuster has been out to my home"
                    />
                    <FormControlLabel
                    control={<Switch name="adjuster" />}
                    label="I need commercial roofing service"
                    />
                    </Grid>
                </FormGroup> 
               </Grid>
               <Grid item md={12} xs={11}>
                <TextField
                  fullWidth
                  label="Additional Info"
                  margin="dense"
                  name="additionalInfo"
                  multiline
                  rows={4}
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions classes={{root: classes.root}}>
            <Button className={classes.button} variant="contained">
              Submit
            </Button>
          </CardActions>
        </FormControl>
      </Container>
    </Card>
  );
};

EstimateForm.propTypes = {
  className: PropTypes.string,
};

export default EstimateForm;
