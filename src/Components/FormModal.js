import React, { Component } from 'react';
import { Modal, Form, Icon, Message } from 'semantic-ui-react';
import firebase from '../firebase';

const options = [
	{ key: 'sm', text: 'Surgical Masks', value: 'Surgical Masks' },
	{ key: 'n95', text: 'N95 Masks', value: 'N95 Masks' },
	{ key: 'fs', text: 'Face Shields', value: 'Face Shields' },
	{ key: 'c', text: 'Coveralls', value: 'Coveralls' },
	{ key: 'hs', text: 'Hazmat Suits', value: 'Hazmat Suits' },
	{ key: 'hc', text: 'Head Covering', value: 'Head Covering' },
	{ key: 'gogg', text: 'Goggles', value: 'Goggles' },
	{ key: 'go', text: 'Gowns', value: 'Gowns' },
	{ key: 'gl', text: 'Gloves', value: 'Gloves' },
	{ key: 'hansan', text: 'Hand Sanitizer', value: 'Hand Sanitizer' },
	{ key: 'wpb', text: 'Waterproof Boots', value: 'Waterproof Boots' },
	{ key: 'v', text: 'Ventilators', value: 'Ventilators' },
	{ key: 'vfil', text: 'Filters for Ventilators', value: 'Filters for Ventilators' },
	{ key: 'sc', text: 'Shoe Covering', value: 'Shoe Covering' },
	{ key: 'cs', text: 'Cleaning Supplies (e.g. bleach)', value: 'Cleaning Supplies' }
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
			requestor_phone: '',
			requestor_email: '',
			acceptedTerms: false,
			isOpen: false,
			isSubmitted: false
		};
	}

	// form control for inputs to dynamically update the state once the user starts typing into the input field
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// Workaround because semantic has a bug due to which handleChange() doesn't work
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
			email: this.state.requestor_email,
			phone: this.state.requestor_phone
		});

		// reset state back to original state once form is submitted
		this.setState({
			supplyType: '',
			quantity: '',
			description: '',
			firstName: '',
			lastName: '',
			organization: '',
			department: '',
			requestor_email: '',
			requestor_phone: '',
			isSubmitted: true
		});
	};

	// handle terms and conditions check
	handleTerms = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			acceptedTerms: !prevState.acceptedTerms
		}));
	};

	render() {
		return (
			<Modal closeIcon={true} trigger={<Icon name="plus" size="large" />}>
				<Modal.Header>Add Supplies</Modal.Header>
				<Modal.Content scrolling>
					<Form success onSubmit={this.handleSubmit}>
						<Form.Group widths="equal">
							<Form.Select
								name="supplyType"
								fluid
								label="Supply Type"
								options={options}
								placeholder="— Select one"
								onChange={this.handleDropdown}
								required
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
								required
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								label="Department Name"
								name="department"
								placeholder="Department Name"
								required
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group widths="equal">
							<Form.Input
								fluid
								label="Phone Number"
								name="phone"
								placeholder="416-223-1000"
								type="tel"
								required
							/>
							<Form.Input
								fluid
								label="Email Address"
								name="email"
								placeholder="management@hospital.com"
								type="email"
								required
							/>
						</Form.Group>
						<Form.Checkbox
							label="I agree to the Terms and Conditions"
							required
							onChange={this.handleTerms}
						/>

						<Modal.Actions>
							<Form.Button open={false} primary type="submit">
								Submit
							</Form.Button>
						</Modal.Actions>
						{this.state.isSubmitted ? (
							<Message
								success
								header="Success!"
								content={`Form has successfully been submitted for ${this.state.quantity} ${this.state
									.supplyType}`}
							/>
						) : null}
					</Form>
				</Modal.Content>
			</Modal>
		);
	}
}

export default FormModal;
