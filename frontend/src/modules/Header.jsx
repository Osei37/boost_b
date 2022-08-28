import * as React from 'react';

import createTheme from "@material-ui/core/styles/createTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import grey from "@material-ui/core/colors/grey";

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

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

function Header() {

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
              noWrap
              variant="a"
              style={{ p: 1, flexShrink: 0, width: buttonWidth }}
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