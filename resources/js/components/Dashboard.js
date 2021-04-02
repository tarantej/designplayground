import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';
import { Container, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <Container>
                <Header />
                <div className="content">
                    <h1>Dashboard</h1>

                {/* <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                <div className="title m-b-md">
                            Design Playground
                        </div>
                        <div className="title m-b-md">
                            Portfolio of Tarantej Singh
                        </div>
                </Paper>
            </Grid>
                <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>Home</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>Projects</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>Case Studies</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>Download CV</Paper>
                </Grid>

          </Grid>
    </div> */}
                </div>
                <Footer />
            </Container>
    );
}

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
