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

const db = firebase.firestore();

var actionCodeSettings = {
	// URL you want to redirect back to. The domain (www.example.com) for this
	// URL must be whitelisted in the Firebase Console.
	url: 'http://localhost:3000/',
	// This must be true.
	handleCodeInApp: true
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

	componentDidMount() {
		this.signIn();
	}

	validateEmail = async (email) => {
		let domain = email.split('@').pop();
		console.log(domain);
		let validatedYN = await db.collection('hospitals').doc(domain).get().then((snapshot) => {
			const result = snapshot.exists ? true : false;
			console.log(result);
			return result;
		});

		return validatedYN
	};

	// send sign in link
	sendLoginLink = async (email, actionCodeSettings) => {
		let result = await this.validateEmail(email);
		if (result) {
			console.log('validated');
			firebase
				.auth()
				.sendSignInLinkToEmail(email, actionCodeSettings)
				.then(function() {
					// The link was successfully sent. Inform the user.
					// Save the email locally so you don't need to ask the user for it again
					// if they open the link on the same device.
					window.localStorage.setItem('emailForSignIn', email);
				})
				.catch(function(error) {
					// Some error occurred, you can inspect the code: error.code
					console.log('send login link error', error.code);
				});
		} else {
			console.log('thou shall not pass');
		}
	};

	signIn = () => {
		// Confirm the link is a sign-in with email link.
		if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
			// Additional state parameters can also be passed via URL.
			// This can be used to continue the user's intended action before triggering
			// the sign-in operation.
			// Get the email if available. This should be available if the user completes
			// the flow on the same device where they started it.
			var email = window.localStorage.getItem('emailForSignIn');

			if (!email) {
				// User opened the link on a different device. To prevent session fixation
				// attacks, ask the user to provide the associated email again. For example:
				email = window.prompt('Please provide your email for confirmation');
			}

			// The client SDK will parse the code from the link for you.
			firebase
				.auth()
				.signInWithEmailLink(email, window.location.href)
				.then(function(result) {
					// Clear email from storage.
					window.localStorage.removeItem('emailForSignIn');
					// You can access the new user via result.user
					// Additional user info profile not available via:
					// result.additionalUserInfo.profile == null
					// You can check if the user is new or existing:
					// result.additionalUserInfo.isNewUser
				})
				.catch(function(error) {
					// Some error occurred, you can inspect the code: error.code
					// Common errors could be invalid email and invalid or expired OTPs.
				});
		}
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
									</Form.Group>
								</Form>
							</ModalContent>
							<Modal.Actions>
								<Form.Button
									onClick={() => this.sendLoginLink(this.state.email, actionCodeSettings)}
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
