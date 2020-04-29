// REACT
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// COMPONENTS
import Navigation from './Components/Nav';
import List from './Components/List';
import Login from './Components/Login';

// STYLES
import './App.css';

// LIBRARIES
import { Container, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from './firebase';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [], // date from firestore
			itemType: [], // master list of item types
			searchTerm: '', // search text from nav
			isOpen: false,
			db: null,
			selectedItem: null,
			readError: null,
			isLoggedIn: null
		};
	}

	componentDidMount() {
		// const itemType = [];
		const db = firebase.firestore();
		this.setState({ db });

		db.collection('supply_items').onSnapshot((snapshot) => {
			const data = this.state.data;
			snapshot.docChanges().forEach((change) => {
				if (change.type === 'added') {
					data.unshift(change.doc.data());
				}
			});
			this.setState(data);
		});
	}

	updateSearchTerm = (searchTerm) => {
		this.setState({
			searchTerm
		});
	};

	selectItem = (item) => {
		this.setState({ selectedItem: item });
	};

	render() {
		const { db, data, selectedItem, isAdmin } = this.state;
		return (
			<Fragment>
				<div className="app-container">
					<Navigation db={db} data={data} updateSearchTerm={this.updateSearchTerm} />
					<Container>
						<Segment className="flex-container">
							<List searchTerm={this.state.searchTerm} data={data} db={db} selectItem={this.selectItem} />
						</Segment>
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default App;
