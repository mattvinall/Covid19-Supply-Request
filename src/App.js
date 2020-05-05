// REACT
import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// COMPONENTS
import Navigation from './Components/Nav';
import List from './Components/List';
import Login from './Components/Login';

// STYLES
import './App.css';

// LIBRARIES
import { Container, Segment, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import firebase from './firebase';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [], // date from firestore
			itemType: [], // master list of item types
			searchTerm: '', // search text from nav
			db: null,
			selectedItem: null,
			user: null
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

		// check domain
		// db.collection('hospitals').get().then((snapshot) => {
		// 	const values = snapshot.docs.map(flattenDoc);
		// });

		// check hospitals collection - go into trillium and grab subcollection of supply items
		// db.collection('hospitals').doc('thp.ca').get().then((snapshot) => {
		// 	const values = snapshot.docs.map(flattenDoc);
		// 	console.table(values);
		// });

		// const flattenDoc = (doc) => {
		// 	return { id: doc.id, ...doc.data() };
		// };

		this.authListener();
	}

	updateSearchTerm = (searchTerm) => {
		this.setState({
			searchTerm
		});
	};

	selectItem = (item) => {
		this.setState({ selectedItem: item });
	};

	authListener = () => {
		firebase.auth().onAuthStateChanged((user) => {
			user ? this.setState({ user }) : this.setState({ user: null });
		});
	};

	signOut = () => {
		firebase
			.auth()
			.signOut()
			.then(function() {
				// Sign-out successful.
			})
			.catch(function(error) {
				// An error happened.
			});
	};

	render() {
		const { db, data, user } = this.state;
		return (
			<Fragment>
				{!user ? (
					<Login authListener={this.authListener} />
				) : (
					<div className="app-container">
						<Container>
							<Button secondary onClick={this.signOut}>
								Logout
							</Button>
						</Container>
						<Navigation db={db} data={data} updateSearchTerm={this.updateSearchTerm} />
						<Container>
							<Segment className="flex-container">
								<List
									searchTerm={this.state.searchTerm}
									data={data}
									db={db}
									selectItem={this.selectItem}
								/>
							</Segment>
						</Container>
					</div>
				)}
			</Fragment>
		);
	}
}

export default App;

// auth - when user logs in (front end parse out domain (i.e. trillium.ca) and check backend to see if email matches domain allow them to access data for their hospital)
