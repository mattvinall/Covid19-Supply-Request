import React, { Component } from 'react';
import Navigation from './Components/Nav';
import List from './Components/List';
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
		const { db, data, selectedItem } = this.state;
		return (
			<div className="app-container">
				<Navigation db={db} data={data} updateSearchTerm={this.updateSearchTerm} />
				<Container>
					<Segment className="flex-container">
						<div className="col-lg-4">
							<List data={data} db={db} selectItem={this.selectItem} />
						</div>
						<Divider vertical />
						<div class="col-lg-8">
							{selectedItem && <ItemDetail className="col-lg-12" item={selectedItem} />}
						</div>
					</Segment>
				</Container>
			</div>
		);
	}
}

export default App;
