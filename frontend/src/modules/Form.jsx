import { React, useState } from 'react'
import { forwardRef, useImperativeHandle } from 'react'
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

const Form = (props, ref) => {

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

  const teamDataList = {
    "All": 0,
    "レバンガ北海道" : 1 ,
    "仙台89ERS" : 2 ,
    "秋田ノーザンハピネッツ" : 3 ,
    "茨城ロボッツ" : 4 ,
    "宇都宮ブレックス" : 5 ,
    "群馬クレインサンダーズ" : 6 ,
    "千葉ジェッツ" : 7 ,
    "アルバルク東京" : 8 ,
    "サンロッカーズ渋谷" : 9 ,
    "川崎ブレイブサンダース" : 10 ,
    "横浜ビー・コルセアーズ" : 11 ,
    "新潟アルビレックスBB" : 12 ,
    "富山グラウジーズ" : 13 ,
    "信州ブレイブウォリアーズ" : 14 ,
    "三遠ネオフェニックス" : 15 ,
    "シーホース三河" : 16 ,
    "ファイティングイーグルス名古屋" : 17 ,
    "名古屋ダイヤモンドドルフィンズ" : 18 ,
    "滋賀レイクスターズ" : 19 ,
    "京都ハンナリーズ" : 20 ,
    "大阪エヴェッサ" : 21 ,
    "島根スサノオマジック" : 22 ,
    "広島ドラゴンフライズ" : 23 ,
    "琉球ゴールデンキングス" : 24 ,
    "青森ワッツ" : 25 ,
    "山形ワイヴァンズ" : 26 ,
    "福島ファイヤーボンズ" : 27 ,
    "越谷アルファーズ" : 28 ,
    "アルティーリ千葉" : 29 ,
    "アースフレンズ東京Z" : 30 ,
    "西宮ストークス" : 31 ,
    "バンビシャス奈良" : 32 ,
    "香川ファイブアローズ" : 33 ,
    "愛媛オレンジバイキングス" : 34 ,
    "ライジングゼファー福岡" : 35 ,
    "佐賀バルーナーズ" : 36 ,
    "長崎ヴェルカ" : 37 ,
    "熊本ヴォルターズ" : 38 ,
    "岩手ビッグブルズ" : 39 ,
    "さいたまブロンコス" : 40 ,
    "東京八王子ビートレインズ" : 41 ,
    "しながわシティ バスケットボールクラブ" : 42 ,
    "横浜エクセレンス" : 43 ,
    "金沢武士団" : 44 ,
    "岐阜スゥープス" : 45 ,
    "ベルテックス静岡" : 46 ,
    "豊田合成スコーピオンズ" : 47 ,
    "トライフープ岡山" : 48 ,
    "山口ペイトリオッツ" : 49 ,
    "鹿児島レブナイズ" : 50 ,
    "東京ユナイテッドバスケットボールクラブ" : 51 ,
    "立川ダイス" : 52 ,
    "ヴィアティン三重" : 53 ,
    "湘南ユナイテッドBC" : 54 ,
    "アイシン・エィ・ダブリュ アレイオンズ安城": 55
  }
  const homeValues = [...Object.keys(teamDataList)];
  const awayValues = [...Object.keys(teamDataList)];

  const gameDataList = {
    season: { column: "Season", values: seasonValues },
    category: { column: "Category", values: categoryValues },
    home: { column: "Home", values: homeValues },
    away: { column: "Away", values: awayValues },
    day: { column: "Day", values: day },
    setsu: { column: "Setsu", values: setsu },
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

  useImperativeHandle(ref, () => ({
    parentPost: () => {
      funPost();
    }
  }));

  const funPost = () => {

    const params = new URLSearchParams();
    params.append('season', season==="All" ? "0" : season);
    params.append('category', category==="All" ? "0" : category);
    params.append('home', teamDataList[home]==="All" ? "0" : teamDataList[home]);
    params.append('away', teamDataList[away]==="All" ? "0" : teamDataList[away]);
    params.append('day', daySwitch===false ? "0" : day.format("M.DD"));
    params.append('setsu', setsuSwitch === false ? "0" : setsu);
    params.append('page', props.page);

    axios.post('/apibscore', params)
      .then(function (res) {
        props.setDisplay({
          ...props.display,
          info: res.data.message,
          cnt: res.data.cnt,
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

export default forwardRef(Form);