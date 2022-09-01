import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Form from './Form';
import List from './List';

const useStyles = makeStyles({
    form: {
        padding: "2rem",
    },
})

function Info() {
    const classes = useStyles();

    const [display, setDisplay] = useState({
        season: "",
        category: "",
        home: 0,
        away: 0,
        day: "",
        week: "",
        setsu: 1
      })
    
    return (
        <>
        {/* ヘッダー */}
        <Header page="Info"/>
        <div className={classes.form}>
            {/* フォーム */}
            <Form display={display} setDisplay={setDisplay}/>
        </div>
        <div className={classes.list}>
            {/* テーブル(検索結果の表示) */}
            <List searchResult={display} />
        </div>
        </>
    )
    
}

export default Info;
