import React from 'react';
import Grid from '@material-ui/core/Grid';
import DigitalClock from '../../components/DigitialClock'
import ClockInList from '../../components/ClockInList'
import SetLocation from '../../components/SetLocation'
import './style.css';

function Kiosk(){
    return(
        <Grid container className="grid-container">
            
            <Grid item xs={false} sm={6} md={6} className="clock-grid">
                <DigitalClock />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <ClockInList />
            </Grid>
        </Grid>
    )
}

export default Kiosk;

//<Link to="/timeclock"><h1>-->John Doe (TESTING)</h1></Link>