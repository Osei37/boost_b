import Header from './Header';

function About() {
  return (
    <>
      <Header page="About" />
      <img
        src={`${process.env.PUBLIC_URL}/court.jpg`}
        alt="Logo"
        width="100%"
        height="auto"
      />
      <div>
        <h2>
          Boost B は男子プロバスケットボールリーグ B.LEAGUE をより楽しむためのサービスを目指しています．
        </h2>
      </div>
    </>
  )
}
  
export default About;
