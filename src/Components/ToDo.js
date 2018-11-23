import React from 'react';
import Typography from '@material-ui/core/Typography';

const ToDo = ({text}) => {
    return <Typography component="h2" variant="h2" gutterBottom>{text}</Typography>
};

export default ToDo
