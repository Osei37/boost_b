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
    table: {
      fontSize: "0.8rem",
    },
  });
  const classes = useStyles();
  
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
            <Table size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {criteriaList.map((criteria) => (
                      <TableCell sx={{ borderBottom: 1, borderTop: 1 }} size="small" align="center">{criteria}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                {haveData && (
                  <TableBody>
                    {props.gameData.map((row) => (
                      <TableRow key={row.playerid}>
                        <TableCell align='right'>{row.number}</TableCell>
                        <TableCell align='center'>{row.startingmember}</TableCell>
                        <TableCell align='left'>{row.playername}</TableCell>
                        <TableCell align='center'>{row.positions}</TableCell>
                        <TableCell align='center'>{row.minutes}</TableCell>
                        <TableCell align='center'>{row.points}</TableCell>
                        <TableCell align='center'>{row.fieldgoalmake}</TableCell>
                        <TableCell align='center'>{row.fieldgoalattempt}</TableCell>
                        <TableCell align='center'>{row.fieldgoalpercent}</TableCell>
                        <TableCell align='center'>{row.threefieldgoalmake}</TableCell>
                        <TableCell align='center'>{row.threefieldgoalattempt}</TableCell>
                        <TableCell align='center'>{row.threefieldgoalpercent}</TableCell>
                        <TableCell align='center'>{row.freethrowmake}</TableCell>
                        <TableCell align='center'>{row.freethrowattempt}</TableCell>
                        <TableCell align='center'>{row.freethrowpercent}</TableCell>
                        <TableCell align='center'>{row.offencerebound}</TableCell>
                        <TableCell align='center'>{row.defencerebound}</TableCell>
                        <TableCell align='center'>{row.totalrebound}</TableCell>
                        <TableCell align='center'>{row.assist}</TableCell>
                        <TableCell align='center'>{row.turnover}</TableCell>
                        <TableCell align='center'>{row.steal}</TableCell>
                        <TableCell align='center'>{row.blockshot}</TableCell>
                        <TableCell align='center'>{row.blockshotreceived}</TableCell>
                        <TableCell align='center'>{row.foul}</TableCell>
                        <TableCell align='center'>{row.drawfoul}</TableCell>
                        <TableCell align='center'>{row.efficiency}</TableCell>
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