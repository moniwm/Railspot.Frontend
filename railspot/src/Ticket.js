import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles ((theme) => ({
    ticket: {
        margin: theme.spacing(2, 25),
        border: '2px solid black',
        borderRadius: '10px',
        flexDirection: 'row',
        background: 'red',
        display: 'flex',
        flexDirection: 'column',

    },
}));

export default function Ticket({userId, departureStation, arrivalStation, price, date, hour, amount}){
    const classes = useStyles();
    return (
        <div className={classes.ticket}>
            <h3>User Id: {userId}</h3>
            <h3>From: {departureStation}</h3>
            <h3>To: {arrivalStation}</h3>
            <h3>Price: {price}</h3>
            <h3>Date: {date}</h3>
            <h3>Hour: {hour}</h3>
            <h3>Amount of tickets: {amount}</h3>
        </div>
    );
}