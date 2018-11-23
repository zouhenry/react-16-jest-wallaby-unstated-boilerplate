import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LeftNavContainer from "../../Containers/LeftNavContainer";

import MenuIcon from '@material-ui/icons/Menu';
import {Subscribe} from "unstated";


export default function Header({classes}) {
    return (
        <Subscribe to={[LeftNavContainer]}>
            {LeftNav => (
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: LeftNav.state.open,
                    })}
                >
                    <Toolbar disableGutters={!LeftNav.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={LeftNav.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: LeftNav.state.open,
                            })}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            My App
                        </Typography>
                    </Toolbar>
                </AppBar>
            )}
        </Subscribe>
    );
}
