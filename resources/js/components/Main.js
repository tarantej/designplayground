import React from 'react';
import ReactDOM from 'react-dom';
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

export default function Main() {
    const classes = useStyles();

    return (
        <Container>
                <Header />
                <div className="content">
                <div className={classes.root}>
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
      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid> */}
    </div>
                </div>

                {/* <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Main Component</div>

                            <div className="card-body">I'm an example component!</div>
                            <div class="links">
                        <a href="https://laravel.com/docs">Docs</a>
                        <a href="https://laracasts.com">Laracasts</a>
                        <a href="https://laravel-news.com">News</a>
                        <a href="https://blog.laravel.com">Blog</a>
                        <a href="https://nova.laravel.com">Nova</a>
                        <a href="https://forge.laravel.com">Forge</a>
                        <a href="https://vapor.laravel.com">Vapor</a>
                        <a href="https://github.com/laravel/laravel">GitHub</a>
                    </div>
                        </div>
                    </div>
                </div> */}
                <Footer />
            </Container>
    );
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
