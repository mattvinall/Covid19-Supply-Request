import React, { Component } from 'react';
import Navigation from './Components/Nav';
import List from './Components/List';
import Details from './Components/Details';
import ItemDetail from './Components/itemDetail';
import { Container, Segment, Divider } from 'semantic-ui-react';
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
			isOpen: false,
			db: null,
			selectedItem: null
		};
	}

	componentDidMount() {
		const data = [];
		// const itemType = [];
		const db = firebase.firestore();
		this.setState({ db: db });
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

	updateUserSelection = (userSelection) => {
		this.setState({
			userSelection
		});
	};

	sendData = (data) => {
		console.log(data);
	};

	selectItem = (item) => {
		this.setState({ selectedItem: item });
	};

	render() {
		const { db, data, selectedItem } = this.state;
		return (
			<div className="app-container">
				<Navigation db={db} data={data} updateSearchTerm={this.updateSearchTerm} />
				<Container>
					<Segment className="flex-container">
						<div className="col-lg-4 flex-column">
							<List data={data} db={db} selectItem={this.selectItem} />
						</div>
						<Divider vertical />
						{selectedItem && <ItemDetail item={selectedItem} />}
						{/* <Divider vertical />
						<div className="col-lg-8">
							<Details
								data={data}
							/>
						</div> */}
					</Segment>
				</Container>
			</div>
		);
	}
}

// filter offering / requesting - chceks each item in the array. Check if the key called item = they key called itemTypeSelectd (in state)

// update app js state from nav and pass that searchTerm down to the list component as well as the list of either offering or reuqesting

export default App;
