import React, { useState } from 'react';
import Nav from "./Nav";
import Ticket from './Ticket';
import "./Admin.css";
import TicketImage from "./images/tickets.png";

export default function BoughtTickets() {

    const [tickets, setTickets] = useState([]);

    const [search, setSearch] = useState([""]);

    const [station, setStation] = useState();

    const [id, setId] = useState();

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
            <div className="Page">

                <section className="Box">
                    <img src={TicketImage}></img>

                    <div>
                        <h3 className="RouteText" >Search: </h3>
                        <input className="RouteInput" type="text" value={search} onChange={updateSearch}></input>
                    </div>

                    <button onClick={getDateTickets} className="RouteButton">Sort By Date</button>
                    <button onClick={getIdTickets} className="RouteButton">Sort By Id</button>
                    <button onClick={getStationTickets} className="RouteButton">Sort By Station</button>

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