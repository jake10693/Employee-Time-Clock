import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';

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

function ClockInList(props) {
  const classes = useStyles();
    console.log()
  return (
      <div>
        <List component="nav" className={classes.root}>
        <ListItem button className={classes.listItems}>
            <ListItemAvatar>
                <Avatar>
                    <PersonIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Nick Adams" secondary="" />
        </ListItem>
        <Divider />

        <ListItem button className={classes.listItems}>
            <ListItemAvatar>
            <Avatar>
                <PersonIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Jacob Carver" secondary="" />
        </ListItem>
        <Divider />

        <ListItem button className={classes.listItems}>
            <ListItemAvatar>
            <Avatar>
                <PersonIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Mike Shev" secondary="" />
        </ListItem>
        <Divider />

        <ListItem button className={classes.listItems}>
            <ListItemAvatar>
            <Avatar>
                <PersonIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Yeasir Hugais" secondary="" />
        </ListItem>
        <Divider />
        </List>
    </div>
  );
}

export default ClockInList;
