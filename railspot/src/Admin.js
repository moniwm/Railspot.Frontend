import React from 'react';
import Nav from "./Nav";
import AdminBoxOption from "./AdminBoxOption";
import DeleteImage from "./images/deleteRoute.png"
import AddImage from "./images/addRoute.png"
import EditImage from "./images/editRoute.png"
import Tickets from "./images/tickets.png"


export default function Admin(){
    return(
        <div>
            <Nav />

            <h1 className="Title">ADMIN</h1>

            <div className="Page">
                <AdminBoxOption target="/DeleteRoute" text="Delete Route" image={DeleteImage}/>
                <AdminBoxOption target="/AddRoute" text="Add Station" image={AddImage}/>
                <AdminBoxOption target="/EditRoute" text="Edit Route" image={EditImage}/>
                <AdminBoxOption target="/BoughtTickets" text="Tickets" image={Tickets}/>
            </div>
            
        </div>
    )
}