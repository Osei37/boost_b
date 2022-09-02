import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';

function About() {

  const useStyles = makeStyles({
    parallaxBg: {
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${process.env.PUBLIC_URL}/about.jpg)`,
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
      backgroundColor: "rgba(0, 0, 0, 0.5)",
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
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
    },
    what: {
      marginBottom: "2em",
    },
  })
  const classes = useStyles();

  return (
    <>
      <Header page="About"/>
      <div className={classes.parallaxBg}>
        <div className={classes.scrollBox}>
          <div className={classes.content}>
            <h1 style={{ textAlign: "center", }}>B.LEAGUE をさらに楽しく！</h1>
            <div className={classes.what}>
              <h2>Boost B とは？</h2>
              <p>　Boost B は男子プロバスケットボールリーグ B.LEAGUE をさらに楽しくすることを目指している非公式サービスです。</p>
            </div>
            <div className={classes.what}>
              <h2>具体的に何をしているのか？</h2>
              <p>　サービスとしては、当Webサイトの常設機能と、noteで簡単な記事を書こうと考えています。現在の常設機能は、過去の試合のボックスコアの検索、オフシーズンの移籍情報の可視化をしています。またボックスコアのデータをまとめています。noteの記事はスタッツから分かる客観的なデータ分析、可視化をしようと考えています。</p>
            </div>
            <div className={classes.what}>
              <h2>なぜ始めたのか？</h2>
              <p>　運営者は昔バスケ部に所属しており、B.LEAGUE 開幕の際にブースターとなりました。B.LEAGUE 観戦を楽しみに生きてます。最近は嬉しいことに、ブースターが増えていると感じていますが、そんな我々ブースターが寂しい思いをする期間があります。そうですオフシーズンです。レギュラーシーズンを終え、残ったチームでのチャンピオンシップやプレイオフを終えると、 B.LEAGUE としての活動は一旦終わりになり、試合は行われません。代表が招集されて国際試合が行われるのはこの期間ですが、当然 B.LEAGUE ほど試合数があるわけでもなく、試合会場も限られるため観戦することも難しいわけです。</p>
              <p>　このオフシーズンにもっと楽しいことができるといいな、と思ったのがサービスを始めようと思ったきっかけです。そこから、 B.LEAGUE 公式のWebサイトに改善の余地があること、スタッツなどのデータ分析をする人が増えてきたことなどから、シーズン中にも楽しいことをしようと考えました。何よりもブースターを増やし、楽しんでもらいたいと考えました。</p>
            </div>
            <div className={classes.what}>
              <h2>今後やること</h2>
              <ul>
                <li>選手の経歴まとめと検索機能（出身校、代表歴など）</li>
                <li>選手間の相関（元チームメイト、同じ出身校など）</li>
                <li>通算達成記録（通算〇得点など）</li>
                <li>PLAY BY PLAY データのまとめ</li>
                <li>ツイートなどから集めた選手の魅力まとめ</li>
              </ul>
              <p>どこまでやれるか分かりませんが、色々やってみようと思っています。</p>
            </div>
            <div className={classes.what}>
              <h2>最後に</h2>
              <p>　運営は学生が趣味で行うものです。時間をどれぐらい割けるか、知識や実力が足りるかは分かりません。また、サーバー代等も深く考えていないので急に停止するかもしれません。まったりとお待ちください。</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default About;
