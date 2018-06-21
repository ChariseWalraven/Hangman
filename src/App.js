import React, { Component } from 'react';
import Hangman from './components/Hangman'
import Nav from './containers/Nav'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core';
import { blue, teal, red } from '@material-ui/core/colors'
import './App.css';
import Footer from './containers/Footer';
import ErrorBoundary from './ErrorBoundary'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Indie Flower',
      'cursive'
    ].join(','),
    htmlFontSize: 16,
    display4: {
      lineHeight: '1.9em'
    },
    display1: {
      lineHeight: '1.8em'
    }
  },
  palette: {
    primary: blue,
    secondary: teal,
    error: red,
  },
  spacing: {
    unit: 8
  }
})

const styles = theme => ({
  root: {
    display: 'flexGrow',
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Nav theme={theme} />
          <ErrorBoundary>
            <Hangman theme={theme} />
          </ErrorBoundary>
          <Footer theme={theme} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
