import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function viewHours(){
    alert('Time ready to view')
}

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='btn'>
      
      <Button 
      variant="contained" 
      color="primary"
      onClick={viewHours}>
        View Time
      </Button>
      
    </div>
  );
}
