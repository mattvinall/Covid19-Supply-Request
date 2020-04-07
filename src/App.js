import React, { Component } from 'react';
import Navigation from './Components/Nav';
import Services from './Components/Services';
// import FormModal from './Components/FormModal';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import firebase from './firebase';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [], // date from firestore
			itemType: [], // master list of item types
			searchTerm: '', // search text from nav
			isOpen: false
		};
	}

	componentDidMount() {
		const data = [];
		// const itemType = [];
		const db = firebase.firestore();

		db.collection('supply_items').get().then((snapshot) => {
			snapshot.docs.forEach((doc) => {
				data.push(doc.data());
				this.setState({
					data
				});
			});
		});
		// db.collection('item_type').get().then((snapshot) => {
		// 	snapshot.docs.forEach((doc) => {
		// 		itemType.push(doc.data());
		// 		this.setState({
		// 			itemType
		// 		});
		// 	});
		// });
	}

	updateSearchTerm = (searchTerm) => {
		this.setState({
			searchTerm
		});
	};

	render() {
		return (
			<div className="app-container flex-column">
				<Navigation date={this.state.data} updateSearchTerm={this.updateSearchTerm} />
				<Services data={this.state.data} />
			</div>
		);
	}
}

// filter offering / requesting - chceks each item in the array. Check if the key called item = they key called itemTypeSelectd (in state)

// update app js state from nav and pass that searchTerm down to the list component as well as the list of either offering or reuqesting

export default App;
