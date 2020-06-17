import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { AuthContext } from "../../context/Auth";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
    formControl: {
        minWidth: "100%",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
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

    let {_id, location} = authContext;

    let companyId = _id;

    const handleFormChange = event => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
    }
    
    const [selected, setSelected] = useState('');

    const handleChange = (event) => {
        setSelected(event.target.value);
    };
    
    function handleClick() {
        let payload = {...formData, companyId}
        
        if (formData) {
            API.newEmployee(payload)
            .then((res)=>{
                setOpen(false)
                setFormData(null)
                props.render()
            })
            .catch((err)=>{
                console.log(err)
                setFormData(null)
                setOpen(false)
            })
        }  
    }

    return (
        <div>
            <Button size="small" variant="outlined" color="primary" onClick={handleOpen}>
                <AddIcon />New Employee{props.children}
            </Button>
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
                        <form className={classes.root} noValidate autoComplete="off">
                            <h2>New Employee</h2>
                            <TextField id="standard-basic" label="First Name" name="firstName" onChange={handleFormChange} />
                            <br/>
                            <TextField id="standard-basic" label="Last Name" name="lastName" onChange={handleFormChange} />
                            <br/>
                            <TextField id="standard-basic" label="Phone Number" name="phone" onChange={handleFormChange} />
                            <br/>
                            <TextField id="standard-basic" label="Adress" name="address" onChange={handleFormChange} />
                            <br/>
                            <TextField id="standard-basic" label="Email" name="email" onChange={handleFormChange} />
                            <br/>
                            <TextField id="standard-basic" label="Location ID" name="location" onChange={handleFormChange} />
                            <br/>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Location</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selected}
                                onChange={handleChange}
                                name="location"
                                >
                                {
                                    location.map( location => {
                                        return <MenuItem key={location._id} value={location._id}>{location.locationName}</MenuItem>
                                    })
                                }
                                </Select>
                            </FormControl>
                            <br/>
                            <br/>
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