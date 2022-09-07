import { React, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import dayjs from 'dayjs';

import axios from 'axios'

function Form(props) {

  const [season, setSeason] = useState("All");
  const [category, setCategory] = useState("All");
  const [home, setHome] = useState("All");
  const [away, setAway] = useState("All");
  const [day, setDay] = useState(dayjs("2016-09-22"));
  const [setsu, setSetsu] = useState(1);
  const [daySwitch, setDaySwitch] = useState(false);
  const [setsuSwitch, setSetsuSwitch] = useState(false);

  const seasonValues = ["All", "2019-20", "2020-21", "2021-22"];
  const categoryValues = ["All", "B1", "B2", "B3"];
  const teamValues = ["All"]
  const homeValues = teamValues.concat([ ...Array(10)].map((x, i) => String(i + 1)));
  const awayValues = teamValues.concat([ ...Array(10)].map((x, i) => String(i + 1)));

  const gameDataList = {
    season: { column: "Season", values: seasonValues },
    category: { column: "Category", values: categoryValues },
    home: { column: "Home", values: homeValues },
    away: { column: "Away", values: awayValues },
    day: { column: "Day", values: day },
    setsu: { column: "Setsu", values: setsu }
  }
  const numOfColumns = Object.keys(gameDataList).length + 2;

  const funSetSeason = (e) => {
    setSeason(() => e.target.value);
  }
  const funSetCategory = (e) => {
    setCategory(() => e.target.value);
  }
  const funSetHome = (e) => {
    setHome(() => e.target.value);
  }
  const funSetAway = (e) => {
    setAway(() => e.target.value);
  }
  const funSetSetsu = (e) => {
    setSetsu(() => e.target.value);
  }

  const funSwitchDay = (e) => {
    setDaySwitch(e.target.checked);
  };
  const funSwitchSetsu = (e) => {
    setSetsuSwitch(e.target.checked);
  };

  const funPost = () => {

    const params = new URLSearchParams();
    params.append('season', season==="All" ? "0" : season);
    params.append('category', category==="All" ? "0" : category);
    params.append('home', home==="All" ? "0" : home);
    params.append('away', away==="All" ? "0" : away);
    params.append('day', daySwitch===false ? "0" : day.format("M.DD"));
    params.append('setsu', setsuSwitch===false ? "0" : setsu);

    axios.post('/apibscore', params)
      .then(function (res) {
        props.setDisplay({
          ...props.display,
          info: res.data.message,
        });
    })
    .catch(function (error) {
      console.log("error", error);
    });
  }

  const useStyles = makeStyles({
    condition: {
      width: `${100 / numOfColumns}vw`,
    },
    condSwitch: {
      display: "flex",
    },
    condRow: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "1rem",
    },
  })
  const classes = useStyles();
  
  return (
    <>
      <Grid container className={classes.condRow}>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.condition}>
            <InputLabel>{gameDataList.season.column}</InputLabel>
            <Select
              label={gameDataList.season.column}
              value={season}
              onChange={funSetSeason}
              align="right"
            >
            {gameDataList.season.values.map((v) => (
              <MenuItem value={v}>{v}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.condition}>
            <InputLabel>{gameDataList.category.column}</InputLabel>
            <Select
              label={gameDataList.category.column}
              value={category}
              onChange={funSetCategory}
            >
              {gameDataList.category.values.map((v) => (
                <MenuItem value={v}>{v}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.condition}>
            <InputLabel>{gameDataList.home.column}</InputLabel>
            <Select
              label={gameDataList.home.column}
              value={home}
              onChange={funSetHome}
            >
              {gameDataList.home.values.map((v) => (
                <MenuItem value={v}>{v}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="standard" className={classes.condition}>
            <InputLabel>{gameDataList.away.column}</InputLabel>
            <Select
              label={gameDataList.away.column}
              value={away}
              onChange={funSetAway}
            >
              {gameDataList.away.values.map((v) => (
                <MenuItem value={v}>{v}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container className={classes.condRow}>
        <Grid item xs={2} className={classes.condSwitch} >
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Switch checked={daySwitch} onChange={funSwitchDay} color="primary" value={daySwitch}/>}
              label="Day"
              labelPlacement="start"
              />
          </FormGroup>
        </Grid>
        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Day"
              inputFormat="YYYY/MM/DD"
              value={day}
              // onChange={funSetDaySwitch}
              onChange={setDay}
              emptyLabel="Select a date"
              disabled={!daySwitch}
              renderInput={(params) => <TextField {...params} className={classes.condition}/>}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2}  className={classes.condSwitch}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Switch checked={setsuSwitch} onChange={funSwitchSetsu} color="primary" value={daySwitch}/>}
              label="Setsu"
              labelPlacement="start"
              />
          </FormGroup>
        </Grid>
        <Grid item xs={2}>
        <TextField
          label="Setsu"
          className={classes.condition}
          value={setsu}
          onChange={funSetSetsu}
          disabled={!setsuSwitch}
        />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={funPost}
            size="large"
            variant="contained"
            color="primary"
          >
            検索
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Form;