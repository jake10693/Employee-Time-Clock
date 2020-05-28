<<<<<<< HEAD:client/src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
>>>>>>> e69de98667d8b7f193cdf2d82759d95aece47abf:src/App.js



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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Footer />
      </Grid>

      
    </div>
  );
}
