import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "./style.css"
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
toast.configure()
function click() {
    console.log(e => this.props.onClick(e.target.value))      
}



export default function OutlinedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} id="container">
                <h2>Enter Pin</h2>
                <Grid item xs={12} id="seven">
                    <Button size="large" variant="outlined" id="seven-a" value="7" onClick={click}>7</Button>
                    <Button size="large" variant="outlined" id="eight" value="8" onClick={click}>8</Button>
                    <Button size="large" variant="outlined" id="nine" value="9" onClick={click}>9</Button>
                </Grid>
                <Grid item xs={12} id="four">
                    <Button size="large" variant="outlined" id="four-a" value="4" onClick={click}>4</Button>
                    <Button size="large" variant="outlined" id="five" value="5" onClick={click}>5</Button>
                    <Button size="large" variant="outlined" id="six" value="6" onClick={click}>6</Button>
                </Grid>
                <Grid item xs={12} id="one">
                    <Button size="large" variant="outlined" id="one-a" value="1" onClick={click}>1</Button>
                    <Button size="large" variant="outlined" id="two" value="2" onClick={click}>2</Button>
                    <Button size="large" variant="outlined" id="three" value="3" onClick={click}>3</Button>
                </Grid>
                <Grid item xs={12} id="symbols">
                    <Button size="large" variant="outlined" id="def-1" onClick={click}>*</Button>
                    <Button size="large" variant="outlined" id="zero" value="0" onClick={click}>0</Button>
                    <Button size="large" variant="outlined" id="def-1" onClick={click}>#</Button>
                </Grid>
            </Grid>

        </div>
    );
}




