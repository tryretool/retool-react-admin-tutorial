import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles({
    image: {
        width: '2.5em',
    },
});


const CustomPhotos =({ record = {}, source }) => {
    const classes = useStyles();


    return (
        <img className={classes.image} src={record[source] +".png"} />
    )

}

export default CustomPhotos;
