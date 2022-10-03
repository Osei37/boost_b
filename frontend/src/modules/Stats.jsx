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
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "1em" }}>#</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "1em" }}>S</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "10em" }}>PLAYER</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>PO</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "2em" }}>MIN</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>PTS</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>FGM</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>FGA</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>FG%</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>3FGM</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>3FGA</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>3FG%</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>FTM</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>FTA</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>FT%</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>OR</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>DR</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>TR</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>AS</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>TO</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>ST</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>BS</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>BSR</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>F</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>FD</TableCell>
                  <TableCell className={classes.col} size="small" align="center" style={{ width: "3em" }}>EFF</TableCell>
                </TableRow>
              </TableHead>
              {haveData && (
                <TableBody>
                  {props.gameData.map((row) => (
                    <TableRow key={row.playerid}>
                      <TableCell sx={{ borderLeft: 1 }} align='center'>{row.number}</TableCell>
                      <TableCell sx={{ borderLeft: 1 }} align='center'>{row.startingmember}</TableCell>
                      <TableCell sx={{ borderLeft: 1, borderRight: 1, fontSize: "0.7rem" }} align='left'>{row.playername}</TableCell>
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
                      <TableCell sx={{ borderRight: 1 }} align='center'>{row.efficiency}</TableCell>
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