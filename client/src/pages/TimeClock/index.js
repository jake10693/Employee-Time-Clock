import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import TimerIcon from '@material-ui/icons/Timer';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import AnalogClock from '../../components/AnalogClock';
import Copyright from '../../components/Copyright'
import Calendar from '../../components/Calendar';
import API from '../../utils/Api';
import './style.css';

function TabPanel(props) {
  
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    marginBottom: "2rem",
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function TimeClock(props) {
  
  const userId = props.location.state.id

  const classes = useStyles();
  
  const [message, setMessage] = useState(null);
  const [value, setValue] = useState(0);
  const [state, setState] = useState(null); 
  const [name, setName] = useState("loading...");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function onSubmit(event){
    event.preventDefault();
  }
  
  function handleClick() {
    API.clockInOut({id: userId}) 
    .then(res => {
      setMessage(res.data.message)
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  useEffect(()=>{
    API.getOneEmployee(userId) 
    .then(res => {
      setState(res.data.lastClockId)
      setName(`${res.data.firstName} ${res.data.lastName}`)
    })
    .catch(err => {
      console.log(err)
      setState(null)
    })
  },[message, userId])

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Timeclock" {...a11yProps(0)} />
          <Tab label="Timesheet" {...a11yProps(1)} />
          <Tab label="Settings" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <Grid container direction="row" justify="center" alignItems="center">
        <TabPanel value={value} index={0} >
          <Box textAlign="center" m={3} className="name-text">
            <Typography variant="h4" color="primary"> 
              {name}
            </Typography>
          </Box>

          <Box textAlign="center" m={3} className="name-text">
            {
            state ? 
            <Typography className="center status-green"><TimerIcon />Clocked In</Typography> : 
            <Typography className="center status-red"><TimerOffIcon />Clocked Out</Typography>
            }
          </Box>

          <Box className="center">
            <AnalogClock />
          </Box>

          <FormControl variant="outlined" className={classes.formControl} onSubmit={onSubmit}>
            <InputLabel id="demo-simple-select-outlined-label">Job</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={10}
              onChange={null}
              label="Job"
            >
              <MenuItem value={10}>Service</MenuItem>
              <MenuItem value={20}>Shift Manager</MenuItem>
              <MenuItem value={30}>Supervisor</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary" onClick={handleClick} className="full-width">
            {state ?  "Clock Out" : "Clock In"}
          </Button>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box className="center">
            <Calendar />
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Box className="center">
            <Typography >
              Comming Soon!
              </Typography>
          </Box>
        </TabPanel>
      </Grid>
      <Copyright />
    </Box>
  );
}

export default TimeClock;