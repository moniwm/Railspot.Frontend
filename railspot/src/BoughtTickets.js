import React, { useState } from 'react';
import Nav from "./Nav";
import Ticket from './Ticket';
import "./Admin.css";
import TicketImage from "./images/tickets.png";
import User from './User' ;
import { set } from 'date-fns';


export default function BoughtTickets() {

    const [tickets, setTickets] = useState([]);

    const [search, setSearch] = useState();

    const [station, setStation] = useState();

    const [id, setId] = useState();

    const lUser = User.getInstance ();

    function getDateTickets() {
        const myData = fetch(`http://localhost:8080/RailSpot.BackEnd/api/tickets/get-by-date/${search}?From=${lUser.id}&Authorization=${lUser.password}`)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                console.log(data);
                console.log("Aquíllego");
                setTickets(data);
            });
    }

    function getIdTickets() {
        const myData = fetch(`http://localhost:8080/RailSpot.BackEnd/api/tickets/get-by-user/${search}?From=${lUser.id}&Authorization=${lUser.password}`)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                console.log(data);
                console.log("Aquíllego");
                setTickets(data);
            });
    }

    function getStationTickets() {
        const myData = fetch(`http://localhost:8080/RailSpot.BackEnd/api/tickets/get-by-station/${search}?From=${lUser.id}&Authorization=${lUser.password}`)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                console.log(data);
                console.log("Aquíllego");
                setTickets(data);
            });
    }

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    }

    return (
        <div>
            <Nav />
            <div className="PageTicket">

                <section className="BoxTicket">
                    <img src={TicketImage}></img>

                    <div>
                        <h3 className="RouteText" >Search: </h3>
                        <input className="RouteInput" type="text" value={search} onChange={updateSearch}></input>
                    </div>

                    <div>
                        <button onClick={getDateTickets} className="RouteButton">Sort By Date</button>
                        <button onClick={getIdTickets} className="RouteButton">Sort By Id</button>
                        <button onClick={getStationTickets} className="RouteButton">Sort By Station</button>
                    </div> 
      
                    <div>
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

                </section>

            </div>

        </div>
    )
}