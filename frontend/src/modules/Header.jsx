import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

function Header() {

  const links = [
    { title: "About", url: "/about" },
    { title: "Info", url: "/info" },
    { title: "Provide", url: "/provide" },
    { title: "Transfer", url: "/transfer" },
  ]
  const buttonWidth = `${80/links.length}vw`

  return (
    <>
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
    </>
  );
}

export default Header;