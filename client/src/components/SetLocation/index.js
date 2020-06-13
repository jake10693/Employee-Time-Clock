import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import API from '../../utils/Api';
import './style.css';

function SetLocation() {
    
    const [errors, setErrors] = useState(null)
    const [id, setId] = useState(null)

    useEffect(()=>{
    if (id) {
        API.verifyLocation(id)
        .then( res => {
            if (res.status === 200) {
                localStorage.setItem("locationId", id)
            } else {
                console.log(res)
            }
        })
        .catch( err => {
            setErrors("Unable to find that location")
        })
    }
    },[id])

    let inputValue;

    const handleSubmit = (event) => {
        event.preventDefault()
        setId(inputValue)
    }

    const handleChange = (event) => {
        inputValue = event.target.value
        setErrors(null)
    }

    return (
    <form validate="true" autoComplete="off" className="container" onSubmit={handleSubmit}>
        <Grid container wrap="wrap">
            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    Welcome!
                </Typography>
                <Typography variant="h6" align="center">
                    Please enter a location ID to assign this device.
                </Typography>
                <Typography variant="body1" align="center">
                    Once assigned this device will remain registered until your cookies are cleared.
                </Typography>
                {errors ? <Alert severity="error">{errors}</Alert> : null}
            </ Grid>
            <Grid item xs={12}>
                <Grid item className="grid-item">
                    <TextField id="location-id" label="ID" onChange={handleChange}/>
                </Grid>
                <Grid item className="grid-item">
                    <Button variant="contained" color="primary" type="submit">
                        Validate
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </form>
    );
}

export default SetLocation;