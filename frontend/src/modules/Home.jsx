import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import grey from '@mui/material/colors/grey';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Header from './Header';
import Footer from './Footer';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cards_tmp = {
  1: { title: 'Boost B とは？', text: 'Boost B とは...', img: 'articles/red_black_colored_basketball_court.png' },
  2: { title: '勝率【10月編】', text: 'Bリーグ10月の各チームの勝率をまとめます．', img: 'articles/red_arc.png' },
  3: { title: '新卒ルーキー紹介', text: '22-23シーズンに新卒として契約した選手を紹介します．', img: 'articles/red_ark_ukiyoe.png' },
  4: { title: '日本代表まとめ【11/11 vsバーレーン】', text: '11/11 に行われたW杯予選のバーレーン戦に日本代表として選出された選手をまとめます．', img: 'articles/red_arc_oil_painting.png' },
  5: { title: '各チームのマスコット', text: 'Bリーグの各チームのマスコットを紹介します．', img: 'articles/red_bear_plays_basketball.png' },  
}

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: "#606060"
    },
    third: {
      main: "#A0A0A0"
    }
  }
});


function Home() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header page="Home"/>

        <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Boost B
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Boost B は男子プロバスケットボールリーグ B.LEAGUE をより楽しむためのサービスを目指しています．
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
            <Grid container spacing={4}>
              {Object.keys(cards_tmp).map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                      image={`${process.env.PUBLIC_URL}${cards_tmp[card].img}`}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {cards_tmp[card].title}
                      </Typography>
                      <Typography>
                        {cards_tmp[card].text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box> */}
        <Footer />
      {/* End footer */}

        </>
      </ThemeProvider>
    )
}

export default Home;
