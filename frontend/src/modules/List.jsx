import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function List(props) {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();

    var infodata = [];
    if (props.searchResult.info === undefined) {
        infodata[0] = {
            'schedulekey': 0,
            'season': '2020-21',
            'category': 'B1',
            'home': 0,
            'away': 0,
            'day': '0.0',
            'week': 'DAY',
            setsu: 0
        }
    } else {
        infodata = props.searchResult.info
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
            </Table>
        </TableContainer>
    );
}