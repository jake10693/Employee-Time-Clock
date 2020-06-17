import React from 'react';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import StoreIcon from '@material-ui/icons/Store';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

export const mainListItems = (
  <div>
    <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    
    <Link to="/dashboard/locations" style={{ color: 'inherit', textDecoration: 'inherit'}}>  
    <ListItem button>
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText primary="Locations" />
    </ListItem>
    </Link>
    
    <Link to="/dashboard/employees" style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <ListItem button>
      <ListItemIcon>
        <GroupAddIcon />
      </ListItemIcon>
      <ListItemText primary="Employees" />
    </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);