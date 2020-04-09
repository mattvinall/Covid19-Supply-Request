import React from 'react';
import './Details.css';
import { Grid, Item } from 'semantic-ui-react';

const Details = (props) => {
	{
		return props.data.map((item, index) => {
			return (
				<Grid celled key={index} centered={false}>
					<Grid.Column width={13}>
						<Item.Content>
							<h3>SunnyBrooke</h3>
							<h4>Department:</h4>
							<Item.Meta>{item.department}</Item.Meta>
							<h4>Requesting:</h4>
							<Item.Description>
								<Item.Meta>{item.item} x {item.quantity}</Item.Meta>
							</Item.Description>
							<h4>Address:</h4>
							<p>2075 Bayview Ave, Toronto, ON M4N 3M5</p>
							<h4>Email:</h4>
							<p>maddison@sunnybrooke.ca</p>
							<h4>Phone number:</h4>
							<p>(416) 480-6100</p>
							<h4>Special instructions:</h4>
							<p>Please drop off all the donations on the 3rd floor.</p>
						</Item.Content>
					</Grid.Column>
				</Grid>
			);
		});
	}
};

export default Details;
