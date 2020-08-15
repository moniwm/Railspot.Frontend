import React, {useState, useEffect} from 'react';
import Nav from "./Nav";
import "./Admin.css";
import AddImage from "./images/addRoute.png"
import User from './User';


export default function AddRoute(){

    const lUser = User.getInstance ();

    const [input, setInput] = useState();

    const updateInput = e =>{
        setInput (e.target.value);
    }

    const postStation = e =>{
        e.preventDefault();
        fetch(`http://localhost:8080/RailSpot.BackEnd/api/admin/new-station?name=${input}&From=${lUser.id}&Authorization=${lUser.password}`,
         {method: 'POST', mode:'no-cors'})
        .then(function(response){
            console.log(response);
        });
        setInput("");
    }

    return(

        <div>
            <Nav />
            <div className="Page">
                <section className="Box">
                    <img src={AddImage}></img>
                    
                    <div>
                        <h3 className="RouteText" >Station Name</h3>
                        <input value={input} onChange={updateInput} className="RouteInput" type="text"></input>
                    </div>
                    
                    <form onSubmit={postStation}>

                        <button type="submit" className="RouteButton">ADD STATION</button>

                    </form>

                </section>

            </div>
            
        </div>
       
    )
}