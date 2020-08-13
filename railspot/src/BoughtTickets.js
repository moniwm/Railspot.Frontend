import React, { useEffect, useState } from 'react';
import Nav from "./Nav";
import Ticket from './Ticket';
import "./boughtTickets.css";
import TicketImage from "./images/tickets.png";

export default function BoughtTickets() {

    const [tickets, setTickets] = useState([]);

    const [search, setSearch] = useState();

    const [station, setStation] = useState();

    const [id, setId] = useState();

    useEffect(() => {
        //getDateTickets();
        console.log("Use effecr has been used");
    }, []);

    function getDateTickets() {
        fetch("Url para conseguir los tiquetes por fecha"
            , { method: 'GET', mode: 'no-cors' })
            .then(function (response) {
                tickets = response.json()
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }

    function getIdTickets() {
        setId(search);
        fetch("Url para conseguir tiquetes por id"
            , { method: 'GET', mode: 'no-cors' })
            .then(function (response) {
                tickets = response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }

    function getStationTickets() {
        setStation(search);
        fetch("Url para conseguir tiquetes por estación"
            , { method: 'GET', mode: 'no-cors' })
            .then(function (response) {
                tickets = response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }


    return (
        <div>
            <Nav />
            <div className="page">

                <section className="box">
                    <img src={TicketImage}></img>

                    <div>
                        <input value={search} onChange={updateSearch} type="text" className="ticketInput" />
                    </div>

                    <div>
                        <button onClick={getDateTickets} className="RouteButton">Sort By Date</button>
                        <button onClick={getIdTickets} className="RouteButton">Sort By Id</button>
                        <button onClick={getStationTickets} className="RouteButton">Sort By Station</button>
                    </div>

                    <div>
                        {tickets.map(ticket => (
                            <Ticket from={ticket.from}
                                to={ticket.to}
                                cost={ticket.cost}
                                date={ticket.date}
                                hour={ticket.hour}
                                fullWidth />
                        ))}
                    </div>

                </section>

            </div>

        </div>
    )
}