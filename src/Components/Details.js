import React from 'react';
import './Details.css';
import { Grid, Item, Image } from 'semantic-ui-react';

const Details = (props) => {
	{
		return props.data.map((item, index) => {
			return (
				<Grid key={index} centered={true}>
					<Grid.Column>
						<Item.Content>
							<Item.Meta as="h3">{item.isRequest ? 'Requesting' : 'Offering'}</Item.Meta>
							<Item.Header as="a">{item.organization}</Item.Header>
							<Item.Meta>{item.department}</Item.Meta>
							<Item.Description>
								<Item.Meta>{item.item}</Item.Meta>
								<Item.Meta>Quantity x {item.quantity}</Item.Meta>
							</Item.Description>
							<Item.Extra as="a">Additional Details</Item.Extra>
						</Item.Content>
					</Grid.Column>
				</Grid>
			);
		});
	}
};

export default Details;
