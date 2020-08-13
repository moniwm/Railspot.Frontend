import React from 'react';
import Nav from "./Nav";
import "./Admin.css";
import DeleteImage from "./images/deleteRoute.png"


export default function DeleteRoute(){
    return(
        
        <div>
            <Nav />

            <div className="Page">
                <section className="Box">
                    <img src={DeleteImage}></img>
                    
                    <div>
                        <h3 className="RouteText" >From: </h3>
                        <input className="RouteInput" type="text"></input>
                    </div>
                    
                    <div>
                        <h3 className="RouteText" >To:</h3>
                        <input className="RouteInput" type="text"></input>
                    </div>
                    
                    <button className="RouteButton">DELETE ROUTE</button>

                </section>

            </div>
            
        

          
            
        </div>

       
    )
}