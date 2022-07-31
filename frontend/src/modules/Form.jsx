// import React from 'react'
import React, {useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import axios from 'axios'

export default function Form(props) {
    const [season, setSeason] = useState("2020-21");
    const [category, setCategory] = useState("B1");

    const funSetSeason = (e) => {
        setSeason(() => e.target.value);
    }
    const funSetCategory = (e) => {
        setCategory(() => e.target.value);
    }

    const funPost = () => {
        const params = new URLSearchParams();
        params.append('season', season);
        params.append('category', category);
        axios.post('/api', params)
            .then(function (res) {
                // console.log(res.data.message.schedulekey)
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
            <Grid container rowSpacing={8}>
                <form>
                    <Grid item>
                        <TextField
                                label="season"
                                value={season}
                                onChange={funSetSeason}
                            />
                        <TextField
                                label="category"
                                value={category}
                                onChange={funSetCategory}
                            />
                    </Grid>
                    <Grid item>
                        <Button color="inherit" onClick={funPost}>検索</Button>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}