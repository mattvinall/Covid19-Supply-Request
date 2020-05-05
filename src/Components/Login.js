import React, { Component } from 'react';
import firebase from '../firebase';
import Particles from 'react-particles-js';
import { Modal, Form, ModalContent } from 'semantic-ui-react';

const particleStyle = {
	particles: {
		number: {
			value: 50
		},
		size: {
			value: 3
		}
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			}
		}
	}
};

// Login will only render if the user is not logged in, as depicted in App.js 's render method
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			error: ''
		};
	}

	signIn = (email, password) => {
		firebase.auth().signInWithEmailAndPassword(email, password);
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div className="login">
				<Particles className="particles" params={particleStyle} />
				<div className="wrapper loginContainer">
					<h1>[Hospital Name] Covid Inventory Management</h1>
					<React.Fragment>
						<Modal trigger={<button>Login</button>}>
							<Modal.Header>Login</Modal.Header>
							<ModalContent scrolling>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group widths="equal">
										<Form.Input
											fluid
											label="Email"
											name="email"
											placeholder="Email"
											required
											onChange={this.handleChange}
											required
										/>
										<Form.Input
											fluid
											label="Password"
											name="password"
											placeholder="Password"
											required
											onChange={this.handleChange}
											required
										/>
									</Form.Group>
								</Form>
							</ModalContent>
							<Modal.Actions>
								<Form.Button
									onClick={() => this.signIn(this.state.email, this.state.password)}
									open={false}
									primary
									type="submit"
								>
									Submit
								</Form.Button>
							</Modal.Actions>
						</Modal>
					</React.Fragment>
				</div>
			</div>
		);
	}
}

export default Login;
