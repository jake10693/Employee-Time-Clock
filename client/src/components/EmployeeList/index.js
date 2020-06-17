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
import EmployeeModal from '../../components/EmployeeModal';
import API from '../../utils/Api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function EmployeeList() {
  const classes = useStyles();
  
  const {authContext} = useContext(AuthContext);
  const { _id, employees } = authContext;

  const [employeeData, setEmployeeData] = useState(employees);
  const [render, setRender] = useState(false)
  
  useEffect(()=>{
    API.getEmployeesByCompany(_id)
    .then((res)=>{
      setRender(false)
      setEmployeeData(res.data)
      console.log(res)
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
        <EmployeeModal render={reRender} />
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell align="left">Assigned Location</TableCell>
              <TableCell align="center">Active?</TableCell>
            </TableRow>
          </TableHead>
          {<TableBody>
            {employeeData.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="center">{row.active ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>}
        </Table>
      </TableContainer>
    </>
  );
}