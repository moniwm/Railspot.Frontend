import React, {useState} from 'react';
import Nav from "./Nav";
import "./Admin.css";
import EditImage from "./images/editRoute.png"

export default function EditRoute(){
    const [stationFrom, setStationFrom] = useState([""]);
    const [stationTo, setStationTo] = useState([""]);
    const [distance, setDistance] = useState([""]);

    function AddRoute() {
        fetch(`http://localhost:8080/RailSpot.BackEnd/api/admin/new-connection/${stationFrom}?destiny=${stationTo}&distance=${distance}`, 
        {method: 'POST', mode:'no-cors'})
        .then(function(response){
            console.log(response);
        });

        fetch(`http://localhost:8080/RailSpot.BackEnd/api/admin/new-connection/${stationTo}?destiny=${stationFrom}&distance=${distance}`, 
        {method: 'POST', mode:'no-cors'})
        .then(function(response){
            console.log(response);
        });

        setStationFrom("");
        setStationTo("");
        setDistance("");
    }

    function ChangeRoute() {
        fetch(`http://localhost:8080/RailSpot.BackEnd/api/admin/edit-connection/${stationFrom}?destiny=${stationTo}&distance=${distance}`, 
        {method: 'POST', mode:'no-cors'})
        .then(function(response){
            console.log(response);
        });

        fetch(`http://localhost:8080/RailSpot.BackEnd/api/admin/edit-connection/${stationTo}?destiny=${stationFrom}&distance=${distance}`, 
        {method: 'POST', mode:'no-cors'})
        .then(function(response){
            console.log(response);
        });

        setStationFrom("");
        setStationTo("");
        setDistance("");
    }

    const UpdateFrom = e => {
        setStationFrom(e.target.value);
    }

    const UpdateTo = e => {
        setStationTo(e.target.value);
    }

    const UpdateDistance = e => {
        setDistance(e.target.value);
    }

    return(
        
        <div>
            <Nav />

            <div className="Page">
                <section className="Box">
                    <img src={EditImage}></img>

                    <div>
                        <h3 className="RouteText" >From: </h3>
                        <input className="RouteInput" type="text" value={stationFrom} onChange={UpdateFrom}></input>
                    </div>
                    
                    <div>
                        <h3 className="RouteText" >To:</h3>
                        <input className="RouteInput" type="text" value={stationTo} onChange={UpdateTo}></input>
                    </div>

                    <div>
                        <h3 className="RouteText" >Distance:</h3>
                        <input className="RouteInput" type="text" value={distance} onChange={UpdateDistance}></input>
                    </div>
                    
                    <button className="RouteButton" onClick={AddRoute}>ADD ROUTE</button>
                    <button className="RouteButton" onClick={ChangeRoute}>EDIT ROUTE</button>

                </section>

            </div>
            
        </div>

       
    )
}