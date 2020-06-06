import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
    
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <h1>Admin page</h1>
                <TextField
                    required id="standard-required"
                    label="First Name"
                    
                />
                 <TextField
                    required id="standard-required"
                    label="Last Name"
                    
                />
                <TextField
                    required id="standard-required"
                    label="Address" 
                />
                <TextField
                    required id="standard-required"
                    label="City" 
                />
                <TextField
                    required id="standard-required"
                    label="Postal Code" 
                />

                <TextField
                    required id="standard-required"
                    label="Phone Number"
                    type="number"
                    autoComplete="current-password"
                />
            
                <TextField
                    required id="standard-required"
                    label="email"
                />
                <TextField
                    required id="standard-required"
                    label="Role(s)"
                />
            </div>
            <br>
            </br>
            <Button variant="contained" color="primary" id="btn">Submit</Button>
        </form>
    );
}
