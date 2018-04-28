
import React from 'react';
import { withStyles } from 'material-ui/styles';
import { AppBar, Button, Toolbar, Typography, IconButton } from 'material-ui'
import MenuIcon from '@material-ui/icons/Menu';
import { pink, indigo, red } from 'material-ui/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import SearchBar from '../SearchBar';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  appBar: {
    height: 60,
  },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {

  handlePageChange = () => {
    this.context.router.replace('/review');
  };

  onSearch() {
    console.log("search");
  }

  render() {
    return (
      <div className={this.props.classes.root}>
          <MuiThemeProvider theme={theme}>
            <AppBar>
              <Toolbar>
                <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={this.props.classes.flex} >
                  The Complex
                </Typography>
                <SearchBar onSearch={this.onSearch}/>
                <Button color="inherit" onClick={this.handlePageChange}>Write Review</Button>
              </Toolbar>
            </AppBar>
          </MuiThemeProvider>
      </div>
    );
  }
}

Header.propTypes = {
};

export default withStyles(styles)(Header);
