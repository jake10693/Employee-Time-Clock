import React , { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { AuthContext } from "../../context/Auth";
import LocationModal from '../../components/Modal';
import API from '../../utils/Api';
import './style.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function LocationsList() {
  const classes = useStyles();
  
  const {authContext} = useContext(AuthContext);
  const { _id, location } = authContext;
  
  const [locationData, setLocationData] = useState(location);
  const [render, setRender] = useState(false)
  
  useEffect(()=>{
    API.getAllLocations(_id)
    .then((res)=>{
      setRender(false)
      setLocationData(res.data)
    })
    .catch((err)=>{
      setRender(false)
    })
  },[_id, render])

  function reRender (){
    setRender(true)
  }

  return (
    <>
      <Box className="location-btn">
        <LocationModal reRender={reRender} />
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Location Name</TableCell>
              <TableCell align="left">Kiosk ID</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="center">Employees</TableCell>
            </TableRow>
          </TableHead>
          {<TableBody>
            {locationData.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">{row.locationName}</TableCell>
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="center">{row.employees.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>}
        </Table>
      </TableContainer>
    </>
  );
}