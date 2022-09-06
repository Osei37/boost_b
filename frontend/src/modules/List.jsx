import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function List(props) {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();

    let infodata = [];
    let haveData = false;

    if (props.searchResult.info) {
        haveData = true;
        infodata = props.searchResult.info
    } else {
        haveData = false;
    }
    // console.log(infodata)
    // console.log(props.searchResult.info.map((row) => (row.schedulekey)));
    // console.log(props.searchResult.info);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">season</TableCell>
                        <TableCell align="left">category</TableCell>
                        <TableCell align="left">home</TableCell>
                        <TableCell align="left">away</TableCell>
                        <TableCell align="left">day</TableCell>
                        <TableCell align="left">week</TableCell>
                        <TableCell align="left">setsu</TableCell>
                        <TableCell align="left">boxscore</TableCell>
                    </TableRow>
                </TableHead>
                {haveData && (
                    <TableBody>
                        {infodata.map((row) => (
                            <TableRow key={row.schedulekey}>
                                <TableCell>{row.season}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.home}</TableCell>
                                <TableCell>{row.away}</TableCell>
                                <TableCell>{row.day}</TableCell>
                                <TableCell>{row.week}</TableCell>
                                <TableCell>{row.setsu}</TableCell>
                                <TableCell><a href={row.schedulekey}>Boxscore</a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                )}
                {!haveData && (
                    <p style={{ textAlign: "center" }}>No Data</p>
                )}
            </Table>
        </TableContainer>
    );
}

export default List;