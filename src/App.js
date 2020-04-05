import React from 'react';
import Navigation from './Components/Nav';
import AddSupplyModal from './Components/AddSupplyModal.js';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
	return (
		<div className="app-container">
			<Navigation />
			<AddSupplyModal />
		</div>
	);
};

export default App;
