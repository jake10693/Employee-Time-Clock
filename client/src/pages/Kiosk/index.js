import React from 'react';
import Grid from '@material-ui/core/Grid';
import './style.css';
import DigitalClock from '../../components/DigitialClock'
import ClockInList from '../../components/ClockInList'

function Kiosk(){
    return(
        <Grid container>
            
            <Grid item xs={false} sm={6} md={6} className="clock-grid grid">
                <DigitalClock />
            </Grid>

            <Grid item xs={12} sm={6} md={6} elevation={6} className="grid">
                <ClockInList />
            </Grid>
        </Grid>
    )
}

export default Kiosk;

//<Link to="/timeclock"><h1>-->John Doe (TESTING)</h1></Link>