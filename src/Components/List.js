import React, { Fragment } from 'react';
import { Item, Icon } from 'semantic-ui-react';

const List = (props) => {
	const { data, searchTerm } = props;
	return (
		<Item.Group className="ui grid">
			<Item.Content className={'row item-border border-right'}>
				<Item.Header as="h3" className="two wide column">Category</Item.Header>
				<Item.Header as="h3" className="two wide column">Name</Item.Header>
				<Item.Header as="h3" className="one wide column">Status</Item.Header>
				<Item.Header as="h3" className="one wide column">QTY</Item.Header>
				<Item.Header as="h3" className="two wide column">Description</Item.Header>
				<Item.Header as="h3" className="two wide column">Key Documents</Item.Header>
				<Item.Header as="h3" className="two wide column">Expected Delivery</Item.Header>
				<Item.Header as="h3" className="two wide column">Contact</Item.Header>
				<Item.Header as="h3" className="two wide column">Files</Item.Header>
			</Item.Content>
			{data.filter((data) => {
				const searchRegExp = new RegExp(searchTerm, "i")
				return searchRegExp.test(data.supplyType)
			}).map((item, index) => {
				return (
					<Item.Content key={index} className={'row item-border border-right'}>
						<Item.Header as="h5" className="two wide column">{item.supplyType}</Item.Header>
						<Item.Description className="two wide column">
							<Item.Meta>Excel Gum</Item.Meta>
						</Item.Description >
						<Item.Description className="one wide column">
							<Item.Meta>On the way</Item.Meta>
						</Item.Description >
						<Item.Description className="one wide column">
							<Item.Meta>20</Item.Meta>
						</Item.Description >
						<Item.Description className="two wide column">
							<Item.Meta>Freshens your breath</Item.Meta>
						</Item.Description >
						<Item.Description className="two wide column">
							<Item.Meta>Receipt.pdf</Item.Meta>
						</Item.Description >
						<Item.Description className="two wide column">
							<Item.Meta>1/10/2020 12:30AM</Item.Meta>
						</Item.Description >
						<Item.Description className="two wide column">
							<Item.Meta>Joanna Waters</Item.Meta>
						</Item.Description >
						<Item.Description className="two wide column">
							<Item.Meta>Receipt.jpg</Item.Meta>
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
