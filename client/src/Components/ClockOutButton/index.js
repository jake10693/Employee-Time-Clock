import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

toast.configure()

function clockOut() {
  toast('Clocked out Successfully!', {
    position: "top-center",
    autoClose: 1400,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  
}

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button
        variant="contained"
        color="secondary"
        onClick={clockOut}>
        clockout
      </Button>

    </div>
  );
}
