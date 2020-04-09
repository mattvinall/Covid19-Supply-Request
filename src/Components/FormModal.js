import React, { Component } from 'react';
import { Modal, Form, Icon, Dropdown } from 'semantic-ui-react';
import firebase from '../firebase';

const options = [
	{ key: 'sm', text: 'Surgical Masks', value: 'surgical_masks' },
	{ key: 'n95', text: 'N95 Masks', value: 'n95_masks' },
	{ key: 'fs', text: 'Face Shields', value: 'face_shields' },
	{ key: 'c', text: 'Coveralls', value: 'coveralls' },
	{ key: 'hs', text: 'Hazmat Suits', value: 'hazmat_suits' },
	{ key: 'hc', text: 'Head Covering', value: 'head_covering' },
	{ key: 'gogg', text: 'Goggles', value: 'goggles' },
	{ key: 'go', text: 'Gowns', value: 'gowns' },
	{ key: 'gl', text: 'Gloves', value: 'gloves' },
	{ key: 'hansan', text: 'Hand Sanitizer', value: 'hand_sanitizer' },
	{ key: 'wpb', text: 'Waterproof Boots', value: 'waterproof_boots' },
	{ key: 'v', text: 'Ventilators', value: 'ventilators' },
	{ key: 'vfil', text: 'Filters for Ventilators', value: 'filters' },
	{ key: 'sc', text: 'Shoe Covering', value: 'shoe_covering' },
	{ key: 'cs', text: 'Cleaning Supplies (e.g. bleach)', value: 'cleaning_supplies' }
];

class FormModal extends Component {
	constructor() {
		super();
		this.state = {
			isRequest: true,
			supplyType: '',
			quantity: 0,
			description: '',
			firstName: '',
			lastName: '',
			organization: '',
			department: '',
			phone: '',
			email: '',
			isOpen: false,
			acceptedTerms: false
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// Workaround cuz semantic has a bug due to which handleChange() doesn't work
	handleDropdown = (e, d) => {
		this.setState({
			[d.name]: d.value
		});
	};

	handleSubmit = (e) => {
		// prevent default on form submit
		e.preventDefault();

		// reference firestore
		const db = firebase.firestore();

		// add to supply items collection with values from state
		db.collection('supply_items').add({
			supplyType: this.state.supplyType,
			quantity: this.state.quantity,
			description: this.state.description,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			organization: this.state.organization,
			department: this.state.department,
			email: this.state.email,
			phone: this.state.phone,
			date: firebase.database.ServerValue.TIMESTAMP
		});
	};

	handleTerms = (e) => {
		e.preventDefault();
		this.setState({
			acceptedTerms: true
		});
	};

	render() {
		return (
			<Modal trigger={<Icon onClick={this.handleClick} name="plus" size="large" />}>
				<Modal.Header>Add Supplies</Modal.Header>
				<Modal.Content scrolling>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group widths="equal">
							<Form.Select
								name="supplyType"
								fluid
								label="Supply Type"
								options={options}
								placeholder="— Select one"
								required
								onChange={this.handleDropdown}
							/>
							<Form.Input
								fluid
								label="Quantity"
								name="quantity"
								placeholder="Quantity"
								type="number"
								min="1"
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.TextArea
							label="Description"
							name="description"
							placeholder="Tell us anything else about your request/offer. For example, brand/model, delivery instructions, etc."
							onChange={this.handleChange}
						/>
						<Form.Group widths="equal">
							<Form.Input
								fluid
								label="First Name"
								name="firstName"
								placeholder="First Name"
								required
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								label="Last Name"
								name="lastName"
								placeholder="Last Name"
								required
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group widths="equal">
							<Form.Input
								fluid
								label="Organization Name"
								name="organization"
								placeholder="Organization Name"
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								label="Department Name"
								name="department"
								placeholder="Department Name"
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group widths="equal">
							<Form.Input
								fluid
								label="Phone Number"
								name="phone"
								placeholder="Phone Number"
								type="tel"
								required
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								label="Email Address"
								name="email"
								placeholder="Email Address"
								type="email"
								required
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Checkbox
							label="I agree to the Terms and Conditions"
							required
							onChange={this.handleTerms}
						/>
						<Form.Button onClick={this.handleSubmit} primary type="submit">
							Submit
						</Form.Button>
					</Form>
				</Modal.Content>
				{/* <Modal.Actions>
					<Button onClick={this.handleSubmit} primary>
						Submit
					</Button>
					<Button cancel>Cancel</Button>
				</Modal.Actions> */}
			</Modal>
		);
	}
}

export default FormModal;
