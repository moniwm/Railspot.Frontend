import React, {useState}from 'react';
import Nav from "./Nav";
import "./Admin.css";
import DeleteImage from "./images/deleteRoute.png"


export default function DeleteRoute(){

    const [stationFrom, setStationFrom] = useState([""]);
    const [stationTo, setStationTo] = useState([""]);

    function DeleteRouteAux() {

        fetch(`http://localhost:8080/RailSpot.BackEnd/api/admin/delete-connection/${stationFrom}?destiny=${stationTo}`, 
        {method: 'POST', mode:'no-cors'})
        .then(function(response){
            console.log(response);
        });

        fetch(`http://localhost:8080/RailSpot.BackEnd/api/admin/delete-connection/${stationTo}?destiny=${stationFrom}`, 
        {method: 'POST', mode:'no-cors'})
        .then(function(response){
            console.log(response);
        });

        setStationFrom("");
        setStationTo("");
    }

    const UpdateFrom = e => {
        setStationFrom(e.target.value);
    }

    const UpdateTo = e => {
        setStationTo(e.target.value);
    }

    return(
        
        <div>
            <Nav />

            <div className="Page">
                <section className="Box">
                    <img src={DeleteImage}></img>

                    <div>
                        <h3 className="RouteText" >From: </h3>
                        <input className="RouteInput" type="text" value={stationFrom} onChange={UpdateFrom}></input>
                    </div>
                    
                    <div>
                        <h3 className="RouteText" >To:</h3>
                        <input className="RouteInput" type="text" value={stationTo} onChange={UpdateTo}></input>
                    </div>
                    
                    <button className="RouteButton" onClick={DeleteRouteAux}>DELETE ROUTE</button>

                </section>

            </div>
            
        </div>

       
    )
}