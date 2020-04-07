import React, { Component } from 'react';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';

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
	constructor(props) {
		super(props);
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

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTerms = this.handleTerms.bind(this);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('handle sub', e);
	};

	handleTerms = (e) => {
		e.preventDefault();
		this.setState({
			acceptedTerms: true
		});
	};

	render() {
		return (
			<Modal trigger={<Icon onClick={this.handleClick} name="plus" size="small" />}>
				<Modal.Header>Add Supplies</Modal.Header>
				<Modal.Content scrolling>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group widths="equal">
							<Form.Select
								fluid
								label="Supply Type"
								name="supplyType"
								options={options}
								placeholder="— Select one"
								required="true"
								onChange={this.handleChange}
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
								required="true"
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								label="Last Name"
								name="lastName"
								placeholder="Last Name"
								required="true"
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
								required="true"
								onChange={this.handleChange}
							/>
							<Form.Input
								fluid
								label="Email Address"
								name="email"
								placeholder="Email Address"
								type="email"
								required="true"
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Checkbox
							label="I agree to the Terms and Conditions"
							required="true"
							onChange={this.handleChange}
						/>
						<Form.Button onClick={this.handleTerms}>Submit</Form.Button>
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button onClick={this.handleSubmit} primary>
						Submit
					</Button>
					<Button cancel>Cancel</Button>
				</Modal.Actions>
			</Modal>
		);
	}
}

export default FormModal;
