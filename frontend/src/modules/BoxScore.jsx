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
  const [infoData, setInfoData] = useState(null);

  // ロード時に実行
  React.useEffect(() => {

    const paramsStats = new URLSearchParams();
    paramsStats.append('gameid', gameID);
    paramsStats.append('home', home);
    paramsStats.append('away', away);

    axios.post('/getbscore', paramsStats)
      .then(function (res) {
        setHomeStats(res.data.home);
        setHomeTotalStats(res.data.hometotal[0]);
        setAwayStats(res.data.away);
        setAwayTotalStats(res.data.awaytotal[0]);
      })
      .catch (function (error) {
        console.log("error", error);
      });
    
    const paramsInfo = new URLSearchParams();
    paramsInfo.append('gameid', gameID);

    axios.post('/getinfo', paramsInfo)
      .then(function (res) {
        setInfoData(res.data[0]);
      })
      .catch(function (error) {
        console.log("error", error);
      });

  }, [gameID, home, away]);

  console.log(infoData);

  let haveData = false;
  if (infoData) {
    haveData = true;
  }

  return (
    <>
      <Header page="BoxScore"/>
      <h1>BoxScore</h1>
      <div>
        {haveData && (
            <h2>{infoData.home_team_name}</h2>
          )}
        <Stats gameData={homeStats} totalData={homeTotalStats} />
      </div>
      <div>
        {haveData && (
          <h2>{infoData.away_team_name}</h2>
        )}
        <Stats gameData={awayStats} totalData={awayTotalStats} />
      </div>
      <Footer />
    </>
  )
}

export default BoxScore;
