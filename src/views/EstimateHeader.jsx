import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

const styles = (theme) => ({
    root: {
      display: 'flex',
      overflow: 'hidden',
      background: '#2b5876', 
      // eslint-disable-next-line
      background: '-webkit-linear-gradient(109.6deg,  rgba(255,24,134,1) 11.2%, rgba(252,232,68,1) 52%, rgba(53,178,239,1) 100.2%)',
      // eslint-disable-next-line
      background: 'linear-gradient(109.6deg,  rgba(255,24,134,1) 11.2%, rgba(252,232,68,1) 52%, rgba(53,178,239,1) 100.2%)',
    },
    container: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(30),
      display: 'flex',
      position: 'relative',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(0, 5),
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    subtitle: {
        marginTop: theme.spacing(10),
        fontWeight: "bold",
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
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
          <Grid container spacing={10}>
            <Grid item xs={12} md={12}>
              <div className={classes.item}>
                <Typography variant="h2" align="center" className={classes.title}>
                  {'We now offer'}
                </Typography>
                <Typography variant="h3" align="center" className={classes.title}>
                  {'free, no-contact, no-obligation'}
                </Typography>
                <Typography variant="h4" align="center" className={classes.title}>
                  {'roof inspections'}
                </Typography>
                <Typography variant="h5" align="center" className={classes.subtitle}>
                  {'Let us know how we can help by filling out the form below and we will be in touch to schedule your inspection!'}
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