import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        console.log(infodata);
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
                                <TableCell>{row.home_name}</TableCell>
                                <TableCell>{row.away_name}</TableCell>
                                <TableCell>{row.day}</TableCell>
                                <TableCell>{row.week}</TableCell>
                                <TableCell>{row.setsu}</TableCell>
                                <TableCell><a href={`boxscore?gameid=${row.schedulekey}&home=${row.home}&away=${row.away}`}>Boxscore</a></TableCell>
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