import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Container, Paper, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Index() {
    const classes = useStyles();

    return (
        <div className="container-fluid">
            <div>
             {/* ======= Hero Section =======  */}
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="content container">
                    <div className="row">
                <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className="container" data-aos="fade-in" style={{ position: 'relative', zIndex:'2' }}>
            <h1>Design Playground</h1>
            <h3>Portfolio of Tarantej Singh</h3>
            
        </div>

            </Grid>
            <div className="row">
                
            <div className="col">
        <Button variant="contained" color="primary" href="#home">Home</Button>
      </div>
      <div className="col">
        <Button variant="contained" color="primary" href="#about">About</Button>
      </div>
      <div className="col">
        <Button variant="contained" color="primary" href="#projects">Projects</Button>
      </div>

      <div className="col">
        <Button variant="contained" color="primary" href="#case-studies">Case Studies</Button>
      </div>

      <div className="col">
        <Button variant="contained" color="primary" href="#blog">Blog</Button>
      </div>

      <div className="col">
        <Button variant="contained" color="secondary" href="#cv">Download CV</Button>
      </div>

            {/* <Button variant="contained" color="primary" href="#home">Home</Button> */}

            {/* <Button variant="contained" color="primary" href="#about">About</Button> */}

            {/* <Button variant="contained" color="primary" href="#projects">Projects</Button> */}

            {/* <Button variant="contained" color="primary" href="#case-studies">Case Studies</Button> */}

            {/* <Button variant="contained" color="primary" href="#blog">Blog</Button> */}

            {/* <Button variant="contained" color="secondary" href="#cv">Download CV</Button> */}

            </div>

          </Grid>
          </div>
    </div>
                </div>
        {/* <div className="hero-container" data-aos="fade-in">
            <h1>Alex Smith</h1>
            <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
        </div> */}
    </section>
     {/* End Hero */}
            </div>

                <div className="content container">
                    <div className="row">
                <div className={classes.root}>
          {/* <Grid container spacing={3}>
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

          </Grid> */}
          </div>
    </div>
                </div>
            </div>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
