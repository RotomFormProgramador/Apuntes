import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar,IconButton,Typography,Button,SvgIcon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import menu from './menu.svg'

function MenuIcon(props) {
    return (
      <SvgIcon {...props}>
         <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </SvgIcon>
    );
  }


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



function App() {
    const classes = useStyles();    

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon color="light" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
