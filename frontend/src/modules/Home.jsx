// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider, makeStyles } from "@material-ui/styles";

import { grey } from "@material-ui/core/colors";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

// import About from './About';
// import Info from './Info';
// import Provide from './Provide';
// import Transfer from './Transfer';
// import NotFound from './NotFound';
import Header from './Header';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const useStyles = makeStyles((theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    background: "#ff0055",
    height: "5rem",
    display: "flex",
    justifyContent: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  menuIcon: {
    width: "3rem",
    height: "3rem"
  },
  headerNav: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      width: "70%"
    }
  },
  listItem: {
    margin: "0.5rem 0.25rem",
    padding: "0.25rem",

    "&:hover": {
      background: "#f8df00",
      color: "#292929",
      border: "1px solid #292929"
    },
    "&.active": {
      background: "#f8df00",
      color: "#292929",
      border: "1px solid #292929"
    }
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2)
    }
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
})));

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: "#00bcd4"
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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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
      </Box>
      {/* End footer */}

        </>
      </ThemeProvider>
    )
}

export default Home;
