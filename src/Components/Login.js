import React from 'react';
import Particles from 'react-particles-js';

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
const Login = (props) => {
	return (
		<div className="login">
			<Particles className="particles" params={particleStyle} />
			<div className="wrapper loginContainer">
				<h1>[Hospital Name] Covid Inventory Management</h1>
				<React.Fragment>
					<button onClick={props.logIn}>Login</button>
				</React.Fragment>
			</div>
		</div>
	);
};

export default Login;
