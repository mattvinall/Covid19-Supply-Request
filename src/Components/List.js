import React, { Fragment } from 'react';
import { Item } from 'semantic-ui-react';

const List = (props) => {
	const { data, searchTerm } = props;
	return (
		<Fragment>
			{data.filter((data) => data.supplyType.includes(searchTerm)).map((item, index) => {
				return (
					<Item.Group key={index}>
						<Item className={'item-border border-right'}>
							<Item.Content>
								<Item.Header as="h3">{item.supplyType}</Item.Header>
								<Item.Description>
									<Item.Meta>{item.organization}</Item.Meta>
									<Item.Meta>Quantity x {item.quantity}</Item.Meta>
								</Item.Description>
								<a onClick={() => props.selectItem(item)} style={{ cursor: 'pointer' }}>
									More info
								</a>
							</Item.Content>
						</Item>
					</Item.Group>
				);
			})}
		</Fragment>
	);
};

export default List;
