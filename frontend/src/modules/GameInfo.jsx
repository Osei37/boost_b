import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function GameInfo(props) {
    
  let haveData = false;
  if (props.infoData) {
    haveData = true;
  }
  else {
    haveData = false;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Season</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Day</TableCell>
              <TableCell align="center">Week</TableCell>
              <TableCell align="center">TipOff</TableCell>
              <TableCell align="center">節</TableCell>
              <TableCell align="center">Stadium</TableCell>
              <TableCell align="center">Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {haveData && (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{props.infoData.season}</TableCell>
                <TableCell align="center">{props.infoData.category}</TableCell>
                <TableCell align="center">{props.infoData.day}</TableCell>
                <TableCell align="center">{props.infoData.week}</TableCell>
                <TableCell align="center">{props.infoData.tipoff}</TableCell>
                <TableCell align="center">{props.infoData.setsu}</TableCell>
                <TableCell align="center">{props.infoData.stadium}</TableCell>
                <TableCell align="center">{props.infoData.attendance}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default GameInfo;