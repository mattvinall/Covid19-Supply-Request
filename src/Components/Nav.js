import React, { Component } from 'react';
import { Form, Icon, Header, Grid, Segment, Container } from 'semantic-ui-react';

class Navigation extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			searchTerm: '',
			isOpen: false
		};
	}

	handleChange = (e) => {
		const { id, value } = e.target;
		this.setState({
			[id]: value
		});
	};

	handleClick = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen
		}));
	};

	render() {
		return (
			<Container>
				<Header as="h1" content="COVID-19 Supply" textAlign="center" color="white" />
				<Segment>
					<Grid>
						<Grid.Row style={{ display: 'flex' }}>
							<Grid.Column width="6">
								<Form>
									<Form.Input
										id="searchTerm"
										value={this.state.searchTerm}
										onChange={this.handleChange}
										fluid
										label="search"
										placeholder="search items"
									/>
								</Form>
							</Grid.Column>
							<Grid.Column width="10" textAlign="right" style={{ margin: 'auto' }}>
								<Icon onClick={this.handleClick} name="plus" size="small" />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		);
	}
}

export default Navigation;
