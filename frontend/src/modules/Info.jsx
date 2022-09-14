import React, { useState } from 'react'
import { useRef } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Pagenation from '@mui/material/Pagination';

import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import List from './List';

const useStyles = makeStyles({
    form: {
        padding: "2rem",
    },
    pagenation: {
        paddingTop: "2rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
})

function Info() {
    const childRef = useRef();

    const classes = useStyles();

    const [page, setPage] = useState(1);
    const [display, setDisplay] = useState({})
    
    const funSetPage = (event, value) => {
        setPage(value);
        childRef.current.parentPost();
    }

    return (
        <>
            {/* ヘッダー */}
            <Header page="Info"/>
            <div className={classes.form}>
                {/* フォーム */}
                <Form display={display} setDisplay={setDisplay} page={page} ref={childRef}/>
            </div>
            <div className={classes.list}>
                {/* テーブル(検索結果の表示) */}
                <List searchResult={display} />
            </div>
            <div className={classes.pagenation}>
                <Pagenation
                    count={display.cnt}
                    variant="outlined"
                    onChange={funSetPage}
                    page={page}
                    color="secondary"
                />
            </div>
        </>
    )
}

export default Info;
