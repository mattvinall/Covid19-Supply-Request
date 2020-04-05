import React from 'react';
import Navigation from './Components/Nav';
import Details from './Components/Details';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
	return (
		<div className= "parent">
		<div className="app-container">
			<Navigation />
			<Details />
		</div>
		<p> </p>
		<p> DISCLAIMER: This webapp has been created to ease the transfer of personal protective equipment between donnors and manufacturers and hospitals and front-line workers during the Covid-19 pandemic. The creators of this webapp have no monetary gain from the operations of this application. The equipment delivered and donnated through this webapp have NOT been through any safety check requiremnts or tests of that sort by the creators of this websapp.</p>
		<p> </p>
		</div>
	);
};

export default App;
