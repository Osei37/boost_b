import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import grey from '@mui/material/colors/grey';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

function Footer(props) {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position='static'>
          <Typography
            variant="h6"
            align="center"
            gutterBottom 
            color="inherit"
            noWrap
            style={{ flex: 1 }}
            >
            Boost B
          </Typography>
        </AppBar>
      </ThemeProvider>
    </>
  )

}

export default Footer;