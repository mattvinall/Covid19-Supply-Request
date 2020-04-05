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
			<Container>
				<Header as="h3" content="Sunnybrooke Hospital" textAlign="left" color="white" />
				<Segment>
					<Grid>
						<Grid.Row style={{ display: 'flex' }}>
							<Grid.Column>
								<h3>
									Description
								</h3>
								<p>
									Sunnybrooke hospital is asking all donnors to donate to the following address
								</p>
								<h3>
									Items required
								</h3>
								<p>
									20,000 Gloves <p> </p> 
									10,000 Masks <p> </p>
									20 Ventilators <p> </p>
									500 Hand Sanitizers <p> </p>
									10 Litres of rubbing alcohol <p> </p>
								</p>
								<h3>
									Address
								</h3>
								<p>
									2075 Bayview Ave, Toronto, ON M4N 3M5
								</p>
								<h3>
									Phone Number
								</h3>
								<p>
									(416) 480-6100
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