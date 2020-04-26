import React, { Fragment } from 'react';
import { Item } from 'semantic-ui-react';

const List = (props) => {
	const { data, searchTerm } = props;
	return (
		<Item.Group className="ui grid">
				{data.filter((data) => data.supplyType.includes(searchTerm)).map((item, index) => {
					return (
							<Item.Content key={index} className={'row item-border border-right'}>
									<Item.Header as="h3" className="four wide column">{item.supplyType}</Item.Header>
									<Item.Description className="six wide column">
										<Item.Meta>{item.organization}</Item.Meta>
									</Item.Description >
									<Item.Description className="four wide column">
										<Item.Meta>Quantity x {item.quantity}</Item.Meta>
									</Item.Description >
									<div className="two wide column" onClick={() => props.selectItem(item)} style={{ cursor: 'pointer' }}>
										Edit | Delete
									</div>
								</Item.Content>
					);
				})}
			</Item.Group>
	);
};

export default List;
