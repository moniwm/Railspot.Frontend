import React, { useEffect, useState, cloneElement } from 'react';
import Ticket from './Ticket';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Nav from "./Nav";
import User from './User' ;



const useStyles = makeStyles((theme) => ({
    profile: {
        minHeight: '100vh',
        background: 'lightBlue',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    h5: {
        alignContent: 'center',
        color: 'blue',
        fontSize: '26',
    },
    h5: {
        alignContent: 'center',
        color: 'blue',
        fontSize: '20',
    },
    divprin: {
        alignContent: 'center',
    }

}));

export default function Profile() {

    const classes = useStyles();

    const [tickets, setTickets] = useState([]);

    const [search, setSearch] = useState();

    const [query, setQuery] = useState();

    const lUser = User.getInstance ();

    useEffect(() => {
        getUserTickets();
        console.log("Use effect has been used")
    }, []);

    const getUserTickets = e =>{
        const myData = fetch(`http://localhost:8080/RailSpot.BackEnd/api/tickets/get-by-user/${lUser.id}?From=1&Authorization=1234`)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                console.log(data);
                setTickets(data);
            });
    }


    return (
        <div className = {classes.profile}>
            <Nav />
            <div className={classes.divprin}>
                <h5 className={classes.h5}> My Profile: </h5>
                <h4 className={classes.h4}>{lUser.name}</h4>
                <h5 className={classes.h5}>Email: </h5>
                <h4 className={classes.h4}>{lUser.email}</h4>
                <h5 className={classes.h5}>Id: </h5>
                <h4 className={classes.h4}>{lUser.id}</h4>

            </div>
            



            <div className={classes.tickets}>
                {tickets.map(ticket => (
                    <Ticket 
                        userId={ticket.userId}
                        departureStation={ticket.departureStation}
                        arrivalStation={ticket.arrivalStation}
                        price={ticket.price}
                        date={ticket.date}
                        hour={ticket.hour}
                        amount={ticket.amount}
                        fullWidth />
                ))}
            </div>

        </div>

    )

}