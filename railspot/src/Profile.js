import React, { useEffect, useState, cloneElement } from 'react';
import Ticket from './Ticket';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Nav from "./Nav";


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

}));

export default function Profile() {

    const classes = useStyles();

    const [tickets, setTickets] = useState([
        { from: "Cartago", to: "San José", cost: 540, date: "30/8/2019", hour: "20:40" },
        { from: "Heredia", to: "Guadalupe", cost: 740, date: "5/8/2017", hour: "2:40" },
        { from: "Limón", to: "Puntarenas", cost: 1040, date: "30/3/2020", hour: "21:30" },
    ]);

    const [search, setSearch] = useState();

    const [query, setQuery] = useState("");

    useEffect(() => {
        //getDateTickets();
        console.log("Use effect has been used")
    }, []);

    const getTickets = async () => {
        const response = await fetch("Https of teh request");
        const data = await response.json();
        setTickets(data.hits);
        console.log(data.hits);
    }

    const getDateTickets = e =>{
        e.preventDefault();
        var init ={
            method: 'GET',
            mode: 'no-cors',
        };
        fetch ("URL de conseguir la lista de tiquetes ordenada", init)
        .then(function(response){
            tickets = response.json();
        })
        .then(function(myJson){
            console.log(myJson);
        });
    }

    const getRouteTickets = e =>{
        e.preventDefault();
        var init = {
            method: 'GET',
            mode: 'no-cons',
        };
        //Este fetch necesita parámetros query
        //con el valor de query en lo que busca
        fetch("URL de conseguir la lista según lugar", init)
        .then(function(response){
            tickets = response.json();
        })
        .then(function(myJson){
            console.log(myJson);
        });
    }

    const updateSearch = e =>{
        setSearch(e.target.value);
        setQuery(search);
    }

    return (
        <div className = {classes.profile}>
            <Nav />
            <form onSubmit={getRouteTickets} className={classes.form}>

                <TextField
                    value={search}
                    onChange={updateSearch}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="search"
                    label="SEARCH"
                    name="search"
                    autoComplete="search"
                    autoFocus
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    >
                    Search by Route
                </Button>

            </form>

            <form onSubmit={getDateTickets} className={classes.form}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    >
                    Search by Date
                </Button>
            </form>

            <div className={classes.tickets}>
                {tickets.map(ticket => (
                    <Ticket from={ticket.from}
                        to={ticket.to}
                        cost={ticket.cost}
                        date={ticket.date}
                        hour={ticket.hour}
                        fullWidth />
                ))}
            </div>

        </div>

    )

}