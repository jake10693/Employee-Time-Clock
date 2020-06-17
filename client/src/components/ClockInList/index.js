import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Redirect } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Loader from '../../components/Loader';
import PersonIcon from '@material-ui/icons/Person';
import API from '../../utils/Api';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0,
  },
  listItems: {
      padding: "1rem"
  },
}));

function ClockInList() {
    const classes = useStyles();

    const [locationId, setLocationID] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState('')
    
    useEffect(() => {
        
        let local = localStorage.getItem("locationId")
        setLocationID(local)
        
        if (locationId) {
            API.retrieveEmployees(locationId)
            .then(res =>{
                setEmployees(res.data)
                setLoading(false)
            })
            .catch(err =>{
                setLoading(false)
                console.log(err)
            })
        }

    },[locationId])


    const handleClick = (event) => {
        let id = event.currentTarget.id
        setUserId(id)
    }

    
    return (
        <>
        {userId ? <Redirect to={{pathname: '/timeclock', state:{id: userId} }} /> :
        <List component="nav" className={classes.root}>
            {
                loading ? <Loader /> :
                employees.map( employee => {
                    return(
                        <div key={employee._id}>
                            <ListItem button id={employee._id} onClick={handleClick} className={classes.listItems}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={`${employee.firstName} ${employee.lastName}`} />
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })
            }
        </List>}
        </>
    );
}

export default ClockInList;
