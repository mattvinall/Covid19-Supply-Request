import React from 'react';
import { Fragment, useEffect, List } from 'react';
import './Details.css';
import { Grid, Item } from 'semantic-ui-react';

const Details = (props) => {
	{
			return (
				<Grid celled centered={false}>
					<Grid.Column width={13}>
							<h3>SunnyBrooke</h3>
							<h4>Department:</h4>
							<h4>Requesting:</h4>
							<h4>Address:</h4>
							<p>2075 Bayview Ave, Toronto, ON M4N 3M5</p>
							<h4>Email:</h4>
							<p>maddison@sunnybrooke.ca</p>
							<h4>Phone number:</h4>
							<p>(416) 480-6100</p>
							<h4>Special instructions:</h4>
							<p>Please drop off all the donations on the 3rd floor.</p>
					</Grid.Column>
				</Grid>
			);
		};
};

export default Details;
