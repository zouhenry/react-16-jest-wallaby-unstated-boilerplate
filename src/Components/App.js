import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Header, LeftNav} from './layout'
import Content from './Content';
import PropsRoute from './propsRoute'
import ToDo from './ToDo';

import './App.css';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

function Layout(props) {
    const {classes} = props;

    return (
        <Router>
            <div className={'App ' + classes.root}>
                <CssBaseline/>
                <Header classes={classes}/>
                <LeftNav classes={classes}/>

                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Route exact path="/" render={() => {
                        return <PropsRoute component={ Content } classes={classes}/>
                    }}/>
                    <Route exact path="/dashboard" render={() => {
                        return <PropsRoute component={ToDo} text='Dashboard'></PropsRoute>
                    }}/>
                    <Route exact path="/about" render={() => {
                        return <PropsRoute component={ToDo} text='About'></PropsRoute>
                    }}/>
                </main>
            </div>
        </Router>

    );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
