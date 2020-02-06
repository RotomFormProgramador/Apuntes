import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from './assets/Icons/HomeIcon'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Button,Link} from "@material-ui/core";
import "./css/Bar.css"


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

export default function Bar() {
    const classes = useStyles()
    return (
        <AppBar  position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >

                <Link component={RouterLink} color="inherit" to="/">
                   <HomeIcon  />
                </Link>

                    
                </IconButton>
                    <Typography variant="h6" className={classes.title}>
                <Link component={RouterLink} underline="none" className="LinkB" color="inherit" to="/Home">
                   Guias Faciles
                </Link>

                   </Typography>

                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

