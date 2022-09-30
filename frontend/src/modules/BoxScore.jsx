import React , { useState } from 'react';
import Header from './Header';
import Stats from './Stats';

import axios from 'axios';

function BoxScore(props) {
  const url = window.location.href.split('?').slice(-1)[0];
  const gameID = url.split('&').slice(0, 1)[0].split('=')[1];
  const home = url.split('&').slice(1, 2)[0].split('=')[1];
  const away = url.split('&').slice(2, 3)[0].split('=')[1];
  const [homeStats, setHomeStats] = useState(null);
  const [awayStats, setAwayStats] = useState(null);

  // ロード時に実行
  React.useEffect(() => {

    const params = new URLSearchParams();
    params.append('gameid', gameID);
    params.append('home', home);
    params.append('away', away);

    axios.post('/getbscore', params)
      .then(function (res) {
        const tmpstats = res.data
        console.log(tmpstats)
        setHomeStats(tmpstats);
        console.log(tmpstats)
      })
      .catch (function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <Header page="BoxScore"/>
      <h1>BoxScore</h1>
      {/* <button onClick={funPost}>post</button> */}
      <Stats gameData={homeStats} />
    </>
  )
}

export default BoxScore;
