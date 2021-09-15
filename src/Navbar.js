import React from 'react';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer';
import { ListItem } from '@material-ui/core';

import List from '@material-ui/core/List';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));
export default function Navbar() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Materail ui
                    </Typography>
                    {/* <Drawer></Drawer> */}
                    <Link to="/"> <Button variant="contained" color="primary">
                        Home
                    </Button> </Link>
                    <Link to="/login"> <Button variant="contained" color="primary">
                        Login
                    </Button></Link>
                    <Link to="/signup"> <Button variant="contained" color="primary">
                        Signup
                    </Button></Link>
                    <Link to="/about"> <Button variant="contained" color="primary">
                        About
                    </Button></Link>
                    <Link to="/demo"> <Button variant="contained" color="primary">
                        Demo
                    </Button></Link>
                </Toolbar>
            </AppBar>
        </>
    );
}
