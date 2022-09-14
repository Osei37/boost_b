import * as React from 'react';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import grey from '@mui/material/colors/grey';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

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