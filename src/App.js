import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login'
import Navbar from './Navbar'
import SignUp from './Signup'
import About from './About'
import Home from './Home'
import Users from './Users'
import Layout from './Layout';
import Drawer from './Drawer';
import Demo from './Demo';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
       
          <Grid item xs={12}> <Router>
            <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/Login' component={Login} />
            <Route path='/About' component={About} />
            <Route path='/Users' component={Users} />
            <Route path='/Demo' component={Demo} />
          </Switch>
        </Router>
        </Grid>
      
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper  className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.paper} >lg=3</Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.paper} >lg=3</Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.paper} >lg=3</Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.paper} >lg=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
