import React from 'react';
import Nav from "./Nav";
import "./Admin.css";

export default function DeleteRoute(){
    return(
        
        <div>
            <Nav />

            <h3>Route From</h3>
            <input className="RouteInput" type="text"></input>

            <h3>Route To</h3>
            <input className="RouteInput" type="text"></input>

            <button>DELETE ROUTE</button>

          
            
        </div>

       
    )
}