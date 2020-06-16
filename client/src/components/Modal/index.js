import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AuthContext } from "../../context/Auth";
import API from '../../utils/Api'
import './style.css'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '5px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },

}));


export default function TransitionModal(props) {
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    
    const {authContext} = useContext(AuthContext);
    const [formData, setFormData] = useState()

    const companyId = authContext._id;

    const handleFormChange = event => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
        //setErrorMsg(null)
    }

    function handleClick() {
        let payload = {...formData, companyId}
        
        if(formData){
            API.createNewLocation(payload)
            .then((res)=>{
                console.log(res)
                setOpen(false)
                setFormData(null)
            })
            .catch((err)=>{
                console.log(err)
            })
        }  
    }
    

    return (
        <div>
            <button type="button" id="btn" onClick={handleOpen}>
                New Location{props.children}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    <div className={classes.paper}>
                        <form className={classes.root} noValidate={false} autoComplete="off">
                            <h2>Input New Location</h2>
                            <TextField id="standard-basic" required={true} label="Location Name" name="locationName" onChange={handleFormChange} />
                            <br></br>
                            <TextField id="standard-basic" required={true} label="Street Adress" name="address" onChange={handleFormChange}  />
                            <br></br>
                            <TextField id="standard-basic" required={true} label="City" name="city" onChange={handleFormChange} />
                            <br></br>
                            <TextField id="standard-basic" required={true} label="State" name="state" onChange={handleFormChange} />
                            <br></br>
                            <TextField id="standard-basic" required={true} label="Zipcode" name="postalCode" onChange={handleFormChange} />
                            <br></br>
                            <TextField id="standard-basic" required={true} label="Phone" name="phone" onChange={handleFormChange} />
                            <br></br>
                            <br></br>
                            <Button size="small" variant="contained" color="primary" id="submit" onClick={handleClick}>
                                Submit
                            </Button>

                        </form>
                    </div>
                </Fade>
            </Modal>

        </div>
    )

}