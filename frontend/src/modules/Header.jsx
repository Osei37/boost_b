import * as React from 'react';

import createTheme from "@material-ui/core/styles/createTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import grey from "@material-ui/core/colors/grey";

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function Header(props) {
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

  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Info", url: "/info" },
    { title: "Provide", url: "/provide" },
    { title: "Transfer", url: "/transfer" },
  ]
  const buttonWidth = `${80/links.length}vw`

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/boostb.png`}
              alt="Logo"
              width="80px"
            />
          </a>
          <Typography
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          style={{ flex: 1 }}
          >
            {props.page}
          </Typography>

        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          style={{ justifyContent: 'space-evenly', overflowX: 'auto' }}
        >
          {links.map((link_) => (
            <Button
              href={link_.url}
              color="inherit"
              style={{ p: 1, flexShrink: 0, width: buttonWidth }}
              key={link_.title}
            >
              {link_.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>      
    </ThemeProvider>
    </>
  );
}

export default Header;