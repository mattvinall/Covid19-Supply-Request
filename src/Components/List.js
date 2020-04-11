import React, { Container, Fragment, useEffect } from 'react';
import { Item } from 'semantic-ui-react';
import './List.css';

const List = (props) => {
	useEffect(() => {
		props.sendData('hello');
	});
	return (
<<<<<<< HEAD
		<Fragment>
			{props.data.map((item, index) => {
				return (
					<Item.Group key={index}>
						<Item className={'item-border border-right'}>
							<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
							<Item.Content>
								<Item.Header as="h3">{item.item}</Item.Header>
								<Item.Description>
									<Item.Meta>{item.organization}</Item.Meta>
									<Item.Meta>Quantity x {item.quantity}</Item.Meta>
								</Item.Description>
								<Item.Extra as="a">Additional Details</Item.Extra>
							</Item.Content>
						</Item>
					</Item.Group>
				);
			})}
		</Fragment>
=======
		<Item.Group className="col-lg-4">
		{props.data.map((item, index) => {
			return (
				<Item className={'item-border border-right'}>
					<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
						<Item.Content>
							<Item.Header as="a">{item.organization}</Item.Header>
							<Item.Meta>{item.department}</Item.Meta>
							<Item.Description>
								<Item.Meta>{item.item}</Item.Meta>
								<Item.Meta>Quantity x {item.quantity}</Item.Meta>
							</Item.Description>
							<Item.Extra as="a">More info</Item.Extra>
						</Item.Content>
					</Item>
			);
		})},
		</Item.Group>
>>>>>>> 808a35111465bbf57c7354106f819180062264e6
	);
};

export default List;
