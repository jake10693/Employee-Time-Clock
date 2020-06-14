import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DigitalClock from '../../components/DigitialClock';
import ClockInList from '../../components/ClockInList';
import SetLocation from '../../components/SetLocation';
import Loader from '../../components/Loader';
import './style.css';

function Kiosk() {
   
    const [locationId, setLocationID] = useState();
    const [redirect, setRedirect] = useState("load");

    useEffect(() => {
        let local = localStorage.getItem("locationId")
        setLocationID(local);
        
        if (locationId) {
            setRedirect("list")
        } else {
            setRedirect("location")
        }
    }, [locationId])

    let render;

    if (redirect === "load") {
        render = <Loader />
    } else if (redirect === "list") {
        render = <ClockInList />
    } else if (redirect === "location"){
        render = <SetLocation redirect={redirectFromChildComp}/>
    }

    function redirectFromChildComp(value){
        setRedirect(value)
    }
    
    return(
        <Grid container className="grid-container">
            
            <Grid item xs={false} sm={6} md={6} className="clock-grid">
                <DigitalClock />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                {render}
            </Grid>
        </Grid>
    )
}

export default Kiosk;

//<Link to="/timeclock"><h1>-->John Doe (TESTING)</h1></Link>