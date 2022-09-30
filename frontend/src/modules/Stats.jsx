import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Stats(props) {

  const criteriaList = ['#', 'S', 'PLAYER', 'PO', 'MIN', 'PTS', 'FGM', 'FGA', 'FG%', '3FGM', '3FGA', '3FG%', 'FTM', 'FTA', 'FT%', 'OR', 'DR', 'TR', 'AS', 'TO', 'ST', 'BS', 'BSR', 'F', 'FD', 'EFF']
  let haveData = false;

  if (props.gameData) {
    haveData = true;
  } else {
    haveData = false;
  }

  return (
      <>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {criteriaList.map((criteria) => (
                      <TableCell align="left">{criteria}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                {haveData && (
                  <TableBody>
                    {props.gameData.map((row) => (
                      <TableRow key={row.playerid}>
                        <TableCell>{row.number}</TableCell>
                        <TableCell>{row.startingmember}</TableCell>
                        <TableCell>{row.playername}</TableCell>
                        <TableCell>{row.position}</TableCell>
                        <TableCell>{row.minutes}</TableCell>
                        <TableCell>{row.points}</TableCell>
                        <TableCell>{row.fieldgoalmake}</TableCell>
                        <TableCell>{row.fieldgoalattempt}</TableCell>
                        <TableCell>{row.fieldgoalpercent}</TableCell>
                        <TableCell>{row.threefieldgoalmake}</TableCell>
                        <TableCell>{row.threefieldgoalattempt}</TableCell>
                        <TableCell>{row.threefieldgoalpercent}</TableCell>
                        <TableCell>{row.freethrowmake}</TableCell>
                        <TableCell>{row.freethrowattempt}</TableCell>
                        <TableCell>{row.freethrowpercent}</TableCell>
                        <TableCell>{row.offenserebound}</TableCell>
                        <TableCell>{row.defenserebound}</TableCell>
                        <TableCell>{row.totalrebound}</TableCell>
                        <TableCell>{row.assist}</TableCell>
                        <TableCell>{row.turnover}</TableCell>
                        <TableCell>{row.steal}</TableCell>
                        <TableCell>{row.blockshot}</TableCell>
                        <TableCell>{row.blockshotreceived}</TableCell>
                        <TableCell>{row.foul}</TableCell>
                        <TableCell>{row.fouldrawn}</TableCell>
                        <TableCell>{row.efficiency}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                )}
                {!haveData && (
                  <p style={{ textAlign: 'center' }}>No Data</p>
                )}
            </Table>
        </TableContainer>
      </>
  )
}

export default Stats;