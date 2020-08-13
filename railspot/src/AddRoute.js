import React, {useState} from 'react';
import Nav from "./Nav";
import "./Admin.css";
import DeleteImage from "./images/deleteRoute.png"


export default function AddRoute(){

    const [input, setInput] = useState();

    const updateInput = e =>{
        setInput (e.target.value);
    }

    const postStation = e =>{
        e.preventDefault();
        // var init={
        //     method: 'POST',
        //     mode: 'no-cons',
        // };
        fetch(`http://localhost:8080/RailSpot.BackEnd/api/admin/new-station?name=${input}`, {method: 'POST', mode:'no-cors'})
        .then(function(response){
            console.log(response);
        });
    }

    return(

        <div>
            <Nav />
            <div className="Page">
                <section className="Box">
                    <img src={DeleteImage}></img>
                    
                    <div>
                        <h3 className="RouteText" >Station Name</h3>
                        <input onChange={updateInput} className="RouteInput" type="text"></input>
                    </div>
                    
                    <form onSubmit={postStation}>

                        <button type="submit" className="RouteButton">ADD STATION</button>

                    </form>

                </section>

            </div>
            
        </div>
       
    )
}