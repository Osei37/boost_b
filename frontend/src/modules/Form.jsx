import {React, useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import axios from 'axios'

function Form(props) {
  const [season, setSeason] = useState("All");
  const [category, setCategory] = useState("All");
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const [day, setDay] = useState(dayjs('2022-08-18T21:11:54'));
  // const [week, setWeek] = useState("");
  const [setsu, setSetsu] = useState(0);

  const seasonValues = ["All", "2019-20", "2020-21", "2021-22"];
  const categoryValues = ["All", "B1", "B2", "B3"];
  const homeValues = [...Array(10)].map( (x, i) => i + 1 );
  const awayValues = [...Array(10)].map( (x, i) => i + 1 );
  const weekValues = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const gameDataList = {
    season: { column: "Season", values: seasonValues },
    category: { column: "Category", values: categoryValues },
    home: { column: "Home", values: homeValues },
    away: { column: "Away", values: awayValues },
    day: { column: "Day", values: weekValues },
    week: { column: "Week", values: weekValues }
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
  const funSetDay = (e) => {
    setDay(() => e.target.value);
  }
  const funSetSetsu = (e) => {
    setSetsu(() => e.target.value);
  }

  const funPost = () => {
    const params = new URLSearchParams();
    params.append('season', season);
    params.append('category', category);
    axios.post('/apibscore', params)
      .then(function (res) {
        props.setDisplay({
          ...props.display,
          info: res.data.message,
          // schedulekey: res.data.message.filter(function (sk) { return sk.schedulekey}),
          // season: res.data.message.season,
          // category: res.data.message.category,
          // home: res.data.message.home,
          // away: res.data.message.away,
          // day: res.data.message.day,
          // week: res.data.message.week,
          // setsu: res.data.message.setsu
        });
    })
    .catch(function (error) {
      console.log("error", error);
    });
  }

  return (
    <>
      <div style={{ justifyContent: "start" }}>

        <FormControl variant="standard" style={{ width: `${100 / numOfColumns}vw` }}>
          <InputLabel>{gameDataList.season.column}</InputLabel>
          <Select
            label={gameDataList.season.column}
            value={season}
            onChange={funSetSeason}
          >
            {gameDataList.season.values.map((v) => (
              <MenuItem value={v}>{v}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="standard" style={{ width: `${100 / numOfColumns}vw` }}>
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

        <FormControl variant="standard" style={{ width: `${100 / numOfColumns}vw` }}>
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

        <FormControl variant="standard" style={{ width: `${100 / numOfColumns}vw` }}>
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

      </div>
      <div style={{ justifycontent: "start" }}>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="YYYY/MM/DD"
            value={day}
            onChange={funSetDay}
            renderInput={(params) => <TextField {...params} style={{ width: `${100 / numOfColumns}vw` }}/>}
          />
        </LocalizationProvider>

        {/* <FormControl variant="standard" style={{ width: `${100 / numOfColumns}vw` }}>
          <InputLabel>{gameDataList.day.column}</InputLabel>
          <Select label={gameDataList.day.column}>
            {gameDataList.day.values.map((v) => (
              <MenuItem value={v}>{v}</MenuItem>
            ))}
          </Select>
        </FormControl> */}

        <TextField
          label="setsu"
          style={{ width: `${100 / numOfColumns}vw` }}
          value={setsu}
          onChange={funSetSetsu}
        />

        <Button
          onClick={funPost}
        >
          検索
        </Button>

      </div>


    </>
  )
}

export default Form;