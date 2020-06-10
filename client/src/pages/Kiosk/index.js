import React from 'react';
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import './style.css';
import DigitalClock from '../../components/DigitialClock'
//import employee from "./employee.json"

const employee = [
    {
        "name": "Nick Adams"
    },
    {
        "name": "Yeasir Huigas" 
    },
    {
        "name": "Jacob Carver"
    },
    {
        "name": "Mike Shev"
    }
]
function Kiosk(){
    const list = employee.map(person => {
        return (
            <h1>{person.name}</h1>
        )
    })
  
    return(
        <Grid container>
            
            <Grid item xs={false} sm={6} md={6} className="clock-grid grid">
                <Box>
                    <DigitalClock />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} elevation={6} className="grid">
               <Link to="/timeclock">{list}</Link>
            </Grid>
        </Grid>
    )
}

export default Kiosk;