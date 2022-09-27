import React from 'react';
import Header from './Header';

function BoxScore(props) {
    return (
        <>
            <Header page="BoxScore"/>
            <h1>BoxScore</h1>
            <p>gameid: {props.gameid}</p>
        </>
    )
}

export default BoxScore;