import React, { Fragment } from 'react';
import { Item } from 'semantic-ui-react';

const List = (props) => {
	return (
		<Fragment>
			{props.data.map((item, index) => {
				return (
					<Item.Group key={index}>
						<Item className={'item-border border-right'}>
							<Item.Content>
								<Item.Header as="h3">{item.supplyType}</Item.Header>
								<Item.Description>
									<Item.Meta>{item.organization}</Item.Meta>
									<Item.Meta>Quantity x {item.quantity}</Item.Meta>
								</Item.Description>
								<Item.Extra as="a">More Info</Item.Extra>
							</Item.Content>
						</Item>
					</Item.Group>
				);
			})}
		</Fragment>
	);
};

export default List;
