import React from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ListItemLink from '../ListItemLink';
import {Subscribe} from "unstated";
import LeftNavContainer from "../../Containers/LeftNavContainer";

export default function LeftNav(props) {
    const {classes} = props;

    return (
        <Subscribe to={[LeftNavContainer]}>
            {LeftNav => (
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: LeftNav.state.open,
                        [classes.drawerClose]: !LeftNav.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: LeftNav.state.open,
                            [classes.drawerClose]: !LeftNav.state.open,
                        }),
                    }}
                    open={LeftNav.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={LeftNav.handleDrawerClose}>
                            {classes.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        {[
                            {label: 'Home', icon: <HomeIcon/>, to: '/'},
                            {label: 'Dashboard', icon: <DashboardIcon/>, to: '/dashboard'},
                            {label: 'About', icon: <LiveHelpIcon/>, to: '/about'},
                        ].map((navItem, index) => (
                            <ListItemLink key={index} onSelect={LeftNav.setSelectedTab} selected={LeftNav.state.selected} {...navItem} />
                        ))}
                    </List>

                </Drawer>
            )}
        </Subscribe>
    );
}
