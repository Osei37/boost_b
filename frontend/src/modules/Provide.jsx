import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';

function Provide() {

  const useStyles = makeStyles({
    parallaxBg: {
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${process.env.PUBLIC_URL}/provide.jpg)`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      // display: "none",
    },
    scrollBox: {
      width: "70%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      color: "white",
      overflowY: "auto",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    content: {
      backgroundPosition: "center",
      width: "90%",
      margin: "0 auto",
      padding: "50 20",
      // backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
    },
    what: {
      marginBottom: "2em",
    },
  })

  const classes = useStyles();

  return (
    <>
      <Header page="Provide" />
      <div className={classes.parallaxBg}>
        <div className={classes.scrollBox}>
          <div className={classes.content}>
          <div className={classes.what}>
            <h2>BoxScore 公開について</h2>
            <p>　B.LEAGUE が人気になるにつれ、試合を見る以外にも楽しみが増えてきました。その一つにスタッツを使ったデータ分析があります。データ分析をすることで選手のすごさが数値で分かり、普段は日の目を見ない選手もスタッツを分析することで新たな魅力を見つけることができます。最近は趣味でデータ分析をする方をよく見かける気がしますが、公式から配布されているわけではないため、データの収集に少し手間取ってしまうことがあるかと思います。このデータはそんな方の一助になればと思い、収集しました。</p>
          </div>
          <div className={classes.what}>
            <h2>公開先</h2>
            <p>URL はこちら <a color="red" href="https://github.com/Osei37/bleague_data">https://github.com/Osei37/bleague_data</a> <br /> Code から Download ZIP か clone してお使いください。</p>
          </div>
          <div className={classes.what}>
            <h2>詳細</h2>
            <p>データの内容：Box Score と 試合の情報（試合ID、日付、アリーナ名、観客動員数、審判等）<br />期間：2016-17（開幕シーズン）~ 2021-22（新シーズンも更新予定）<br />ファイル形式：csv</p>
          </div>
          <div className={classes.what}>
            <h2>注意事項</h2>
            <ul>
              <li>B.LEAGUE 公式ではありません。</li>
              <li>データの正しさは保証できません。（連絡いただければ直すことは可能です）</li>
              <li>仕様を大きく変更する可能性があります。（ただしできるだけ古いバージョンは残すつもりです）</li>
              <li>公開を予告なく中止する可能性があります。</li>
            </ul>
          </div>
         </div>
        </div>
      </div>
    </>
  )
}
  
export default Provide;
