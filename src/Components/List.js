import React, { Fragment } from 'react';
import { Item, Icon } from 'semantic-ui-react';

const List = (props) => {
	const { data, searchTerm } = props;
	return (
		<Item.Group className="ui grid">
				<Item.Content className={'row item-border border-right'}>
					<Item.Header as="h3" className="four wide column">Supply Type</Item.Header>
					<Item.Description className="six wide column">
						<Item.Meta as="h3" >Organization</Item.Meta>
					</Item.Description >
					<Item.Description className="four wide column">
						<Item.Meta as="h3">Quantity</Item.Meta>
					</Item.Description >
					<div className="two wide column">
						
					</div>
				</Item.Content>
				{data.filter((data) => data.supplyType.includes(searchTerm)).map((item, index) => {
					return (
						<Item.Content key={index} className={'row item-border border-right'}>
							<Item.Header as="h5" className="four wide column">{item.supplyType}</Item.Header>
							<Item.Description className="six wide column">
								<Item.Meta>{item.organization}</Item.Meta>
							</Item.Description >
							<Item.Description className="four wide column">
								<Item.Meta>{item.quantity}</Item.Meta>
							</Item.Description >
							<div className="one wide column" onClick={() => props.selectItem(item)} style={{ cursor: 'pointer' }}>
								<Icon color="blue" name='edit' />
							</div>
							<div className="one wide column" onClick={() => props.selectItem(item)} style={{ cursor: 'pointer' }}>
								<Icon color="red" name='delete' />
							</div>
						</Item.Content>
					);
				})}
			</Item.Group>
	);
};

export default List;
