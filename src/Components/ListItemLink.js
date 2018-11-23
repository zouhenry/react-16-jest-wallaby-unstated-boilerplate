import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

export default function ListItemLink({to, icon, label, selected, onSelect}) {
    return (
        <ListItem onClick={()=>onSelect(label)} selected={label===selected} button component={props => <Link to={to} {...props} key={label}/>}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label}/>
        </ListItem>
    )
}

