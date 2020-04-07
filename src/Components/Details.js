import React, { Component } from 'react';
import { Form, Icon, Header, Grid, Segment, Container } from 'semantic-ui-react';

class Details extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			searchTerm: '',
			isOpen: false
		};
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen
		}));
	};

	render() {
		return (
			<Container classname="col-xs-4 col-lg-8">
				<Header as="h3" content="" textAlign="left" color="white" />
				<Segment classname="col-xs-12 col-lg-8">
					<Grid classname= "col-xs-12 col-lg-8">
						<Grid.Row style={{ display: 'flex' }}>
							<Grid.Column>
								<h3>
									Sunnybrooke Hospital
								</h3>
								<h4>
									Address
								</h4>
								<p>
									2075 Bayview Ave, Toronto, ON M4N 3M5
								</p>
								<h4>
									Phone Number
								</h4>
								<p>
									(416) 480-6100
								</p>
								<h4>
									Email
								</h4>
								<p>
									DummyVariable@gmail.com
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		);
	}

}

export default Details;
