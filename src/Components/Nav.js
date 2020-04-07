import React, { Component } from 'react';
import { Form, Header, Grid, Segment, Container } from 'semantic-ui-react';
import FormModal from './FormModal';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	handleChange = (e) => {
		const { id, value } = e.target;
		// console.log(this.props.state);
		this.setState({
			[id]: value
		});

		this.props.updateSearchTerm(value);
	};

	handleClick = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen
		}));
	};

	modalClose = (isOpen) => {
		this.setState({
			isOpen
		});
	};

	render() {
		return (
			<Container>
				<Header as="h1" content="COVID-19 Supply" textAlign="center" />
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
								{/* <Icon onClick={this.handleClick} name="plus" size="small" /> */}
								<FormModal />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		);
	}
}

export default Navigation;
