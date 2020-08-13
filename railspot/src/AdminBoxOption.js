import React from 'react';
import { Link } from 'react-router-dom';
import "./Admin.css";


export default function AdminBoxOption({target, image, text}){
    return(
        
        <div>
            <div className="ModifyRoute-Box">
                <img src={image}/>
                <Link style={{ textDecoration: "none" }} to={target}>
                    <h4 className="Button">{text}</h4>
                </Link>

            </div>     
            
        </div>    
    )
}