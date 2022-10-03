import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Stats(props) {

  const useStyles = makeStyles({
    col: {
      border: "solid",
      borderWidth: 1,
      background: "grey",
      width: "10%",
    },
  });
  const classes = useStyles();
  
  const criteriaList = ['#', 'S', 'PLAYER', 'PO', 'MIN', 'PTS', 'FGM', 'FGA', 'FG%', '3FGM', '3FGA', '3FG%', 'FTM', 'FTA', 'FT%', 'OR', 'DR', 'TR', 'AS', 'TO', 'ST', 'BS', 'BSR', 'F', 'FD', 'EFF']
  const styleList = [1, 1, 10, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  let haveData = false;
  if (props.gameData) {
    haveData = true;
  } else {
    haveData = false;
  }

  return (
      <>
        <TableContainer component={Paper}>
            <Table size="small" style={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  {criteriaList.map((criteria, index) => (
                    <TableCell key={index} align="center" size="small" className={classes.col} style={{ width: `${styleList[index]}em` }}>{criteria}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {haveData && (
                <TableBody>
                  {props.gameData.map((row) => (
                    <TableRow key={row.playerid}>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.number}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.startingmember}</TableCell>
                      <TableCell align='left' sx={{ borderLeft: 1, fontSize: "0.7rem" }}>{row.playername}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.positions}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.minutes}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.points}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.fieldgoalmake}</TableCell>
                      <TableCell align='center'>{row.fieldgoalattempt}</TableCell>
                      <TableCell align='center'>{row.fieldgoalpercent}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.threefieldgoalmake}</TableCell>
                      <TableCell align='center'>{row.threefieldgoalattempt}</TableCell>
                      <TableCell align='center'>{row.threefieldgoalpercent}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.freethrowmake}</TableCell>
                      <TableCell align='center'>{row.freethrowattempt}</TableCell>
                      <TableCell align='center'>{row.freethrowpercent}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.offencerebound}</TableCell>
                      <TableCell align='center'>{row.defencerebound}</TableCell>
                      <TableCell align='center'>{row.totalrebound}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.assist}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.turnover}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.steal}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.blockshot}</TableCell>
                      <TableCell align='center'>{row.blockshotreceived}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1 }}>{row.foul}</TableCell>
                      <TableCell align='center'>{row.drawfoul}</TableCell>
                      <TableCell align='center' sx={{ borderLeft: 1, borderRight: 1 }}>{row.efficiency}</TableCell>
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