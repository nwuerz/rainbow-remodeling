import React, { useState } from "react";
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
  Switch,
  TextField,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Button
} from "@material-ui/core";
import SubmitButton from "../components/SubmitButton";

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "center",
  },
  input: {
    background: "white",
  }
}));

const EstimateForm = (props) => {
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    hasInsurance: false,
    hasAdjuster: false,
    isCommercial: false,
    moreInfo: "",
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    zip,
    hasInsurance,
    hasAdjuster,
    isCommercial,
    moreInfo,
  } = currentUser;

  const handleInput = (event) => {
    const { value, name } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleChange = (event) => {
    const { checked, name } = event.target;
    setCurrentUser({ ...currentUser, [name]: checked });
  };

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
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="First name"
                  margin="dense"
                  name="firstName"
                  value={firstName}
                  onChange={handleInput}
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  margin="dense"
                  name="lastName"
                  value={lastName}
                  onChange={handleInput}
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="dense"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="dense"
                  name="phone"
                  value={phone}
                  onChange={handleInput}
                  type="number"
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField
                  fullWidth
                  label="Street Address"
                  margin="dense"
                  name="address"
                  value={address}
                  onChange={handleInput}
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  label="Zip Code"
                  margin="dense"
                  name="zip"
                  value={zip}
                  onChange={handleInput}
                  required
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <FormLabel component="legend">
                  Please select all that apply:
                </FormLabel>
                <FormGroup align="center">
                  <Grid item md={12} xs={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={hasInsurance}
                          onChange={handleChange}
                          name="hasInsurance"
                        />
                      }
                      label="I will be filing an insurance Claim"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={hasAdjuster}
                          onChange={handleChange}
                          name="hasAdjuster"
                        />
                      }
                      label="An adjuster has been to my home"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={isCommercial}
                          onChange={handleChange}
                          name="isCommercial"
                        />
                      }
                      label="I need commercial roofing service"
                    />
                  </Grid>
                </FormGroup>
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Additional Info"
                  margin="dense"
                  name="moreInfo"
                  value={moreInfo}
                  onChange={handleInput}
                  multiline
                  rows={4}
                  variant="outlined"
                  className={classes.input}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions classes={{root: classes.root}} style={{ textAlign: "center" }}>
            {firstName && lastName && email && phone && address && zip !== "" ? (
              <SubmitButton />
            ):(
              <Button disabled align="center" style={{ backgroundColor: "grey", color: "white" }}>
                Submit
              </Button>
            )}
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
