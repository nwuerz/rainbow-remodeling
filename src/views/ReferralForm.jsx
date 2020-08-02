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
} from "@material-ui/core";
import SuccessAlert from "../components/SuccessAlert";
import referrerForm from "../components/referrerForm.json";
import referralForm from "../components/referralForm.json";
import SubmitButton from "../components/SubmitButton";

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: "center",
  },
  input: {
    background: "white",
  },
  button: {
    background: "black",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "small",
    fontWeight: "bold",
  },
}));

const ReferralForm = (props) => {
  const [currentUser, setCurrentUser] = useState({
    currentCustomer: false,
    acceptedTerms: false,
  });

  //formspree state

  const [state, setState] = useState({
    status: "",
  });

  const { status } = state;

  //event hanlders

  const handleInput = (event) => {
    const { value, name } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleChange = (event) => {
    const { checked, name } = event.target;
    setCurrentUser({ ...currentUser, [name]: checked });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setState({ status: "SUCCESS" });
      } else {
        setState({ status: "ERROR" });
      }
    };
    xhr.send(JSON.stringify(currentUser));
    setCurrentUser({ currentUser: "" });
  };

  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <Container>
        <form
          onSubmit={submitForm}
          action="https://formspree.io/meqrpowg"
          method="POST"
        >
          <FormControl autoComplete="off" noValidate>
            <CardHeader title="Who is making the referral?" align="left" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                {referrerForm.map((item) => (
                  <Grid item key={item.name} md={item.md} xs={12}>
                    <TextField
                      fullWidth
                      label={item.label}
                      margin="dense"
                      name={item.name}
                      value=""
                      type={item.type}
                      onChange={handleInput}
                      required
                      variant="outlined"
                      className={classes.input}
                    />
                  </Grid>
                ))}
              </Grid>
              <CardHeader title="Who would you like to refer?" align="left" />
              <Divider style={{ marginBottom: "20px" }} />
              <Grid container spacing={3}>
                {referralForm.map((item) => (
                  <Grid item key={item.name} md={item.md} xs={12}>
                    <TextField
                      fullWidth
                      label={item.label}
                      margin="dense"
                      name={item.name}
                      value=""
                      type={item.type}
                      onChange={handleInput}
                      required
                      variant="outlined"
                      className={classes.input}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid item align="center">
                <a className={classes.link} href={"/terms"}>
                  see program terms
                </a>
              </Grid>
              <Grid item md={12} xs={12}>
                <FormLabel component="legend"></FormLabel>
                <FormGroup align="center">
                  <Grid item md={12} xs={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={currentUser.currentCustomer}
                          onChange={handleChange}
                          name="currentCustomer"
                        />
                      }
                      label="I'm a Rainbow customer"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={currentUser.acceptedTerms}
                          onChange={handleChange}
                          name="acceptedTerms"
                        />
                      }
                      label="i understand the program terms"
                    />
                  </Grid>
                </FormGroup>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions
              classes={{ root: classes.root }}
              style={{ textAlign: "center" }}
            >
              {status === "SUCCESS" ? (
                <SuccessAlert />
              ) : (
                <SubmitButton currentUser={currentUser} />
              )}
              {status === "ERROR" ? (
                <p>
                  Sorry, something went wrong! Please give us a call at (469)
                  855-6912.
                </p>
              ) : null}
            </CardActions>
          </FormControl>
        </form>
      </Container>
    </Card>
  );
};

ReferralForm.propTypes = {
  className: PropTypes.string,
};

export default ReferralForm;
