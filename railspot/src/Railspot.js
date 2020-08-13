import React from 'react';
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Admin from "./Admin";
import Profile from "./Profile";
import DeleteRoute from "./DeleteRoute";
import AddRoute from "./AddRoute";
import EditRoute from "./EditRoute";
import BoughtTickets from "./BoughtTickets";
import BuyTickets from "./BuyTickets";
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import TicketsPurchased from './TicketsPurchased';
import Nav from "./Nav";

export default class Railspot extends React.Component{
        
	render(){
		return (
            <Router>
                <body>
                    <Route path="/" exact component={LogIn} />
                    <Route path="/SignUp" component={SignUp} />

                    <Route path="/ModifyRoutes" component={ModifyRoutes} />
                    <Route path="/BuyTickets" component={Nav, BuyTickets} />
                    <Route path="/DeleteRoute" component={DeleteRoute} />
                    <Route path="/AddRoute" component={AddRoute} />
                    <Route path="/EditRoute" component={EditRoute} />
                    <Route path="/BoughtTickets" component={BoughtTickets} />
                    <Route path="/BuyTickets" component={BuyTickets} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Admin" component={Admin} />
                    <Route path="/TicketsPurchased" component={TicketsPurchased} />
			    </body>
            </Router>
		
		);
	}
}