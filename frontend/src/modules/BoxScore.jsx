import React , { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Stats from './Stats';

import axios from 'axios';

function BoxScore() {
  const url = window.location.href.split('?').slice(-1)[0];
  const gameID = url.split('&').slice(0, 1)[0].split('=')[1];
  const home = url.split('&').slice(1, 2)[0].split('=')[1];
  const away = url.split('&').slice(2, 3)[0].split('=')[1];
  const [homeStats, setHomeStats] = useState(null);
  const [homeTotalStats, setHomeTotalStats] = useState(null);
  const [awayStats, setAwayStats] = useState(null);
  const [awayTotalStats, setAwayTotalStats] = useState(null);

  // ロード時に実行
  React.useEffect(() => {

    const params = new URLSearchParams();
    params.append('gameid', gameID);
    params.append('home', home);
    params.append('away', away);

    axios.post('/getbscore', params)
      .then(function (res) {
        console.log(res.data);
        setHomeStats(res.data.home);
        setHomeTotalStats(res.data.hometotal[0]);
        setAwayStats(res.data.away);
        setAwayTotalStats(res.data.awaytotal[0]);
      })
      .catch (function (error) {
        console.log("error", error);
      });
  }, [gameID, home, away]);

  return (
    <>
      <Header page="BoxScore"/>
      <h1>BoxScore</h1>
      <div>
        <Stats gameData={homeStats} totalData={homeTotalStats} />
      </div>
      {/* <h1></h1> */}
      <div>
        <Stats gameData={awayStats} totalData={awayTotalStats} />
      </div>
      <Footer />
    </>
  )
}

export default BoxScore;
