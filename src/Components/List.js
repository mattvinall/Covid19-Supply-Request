import React, { Fragment, useEffect } from 'react';
import { Item } from 'semantic-ui-react';

const List = (props) => {
	useEffect(() => {
		props.sendData('hello');
	});
	return (
		<Fragment>
			{props.data.map((item, index) => {
				return (
					<Item.Group key={index} className="col-lg-4">
						<Item className={'item-border border-right'}>
							<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
							<Item.Content>
								<Item.Meta as="h5">{item.isRequest ? 'Requesting' : 'Offering'}</Item.Meta>
								<Item.Header as="a">{item.organization}</Item.Header>
								<Item.Meta>{item.department}</Item.Meta>
								<Item.Description>
									<Item.Meta>{item.item}</Item.Meta>
									<Item.Meta>Quantity x {item.quantity}</Item.Meta>
								</Item.Description>
								<Item.Extra as="a">Additional Details</Item.Extra>
							</Item.Content>
						</Item>
						{/* <Item className={'item-border border-right'}>
						<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
						<Item.Content>
							<Item.Meta as="h5">{item.isRequest ? 'Requesting' : 'Offering'}</Item.Meta>
							<Item.Header as="a">{item.organization}</Item.Header>
							<Item.Meta>{item.department}</Item.Meta>
							<Item.Description>
								<Item.Meta>{item.item}</Item.Meta>
								<Item.Meta>Quantity x {item.quantity}</Item.Meta>
							</Item.Description>
							<Item.Extra as="a">Additional Details</Item.Extra>
						</Item.Content>
					</Item>
					<Item className={'item-border border-right'}>
						<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
						<Item.Content>
							<Item.Meta as="h5">{item.isRequest ? 'Requesting' : 'Offering'}</Item.Meta>
							<Item.Header as="a">{item.organization}</Item.Header>
							<Item.Meta>{item.department}</Item.Meta>
							<Item.Description>
								<Item.Meta>{item.item}</Item.Meta>
								<Item.Meta>Quantity x {item.quantity}</Item.Meta>
							</Item.Description>
							<Item.Extra as="a">Additional Details</Item.Extra>
						</Item.Content>
					</Item>
					<Item className={'item-border border-right'}>
						<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
						<Item.Content>
							<Item.Meta as="h5">{item.isRequest ? 'Requesting' : 'Offering'}</Item.Meta>
							<Item.Header as="a">{item.organization}</Item.Header>
							<Item.Meta>{item.department}</Item.Meta>
							<Item.Description>
								<Item.Meta>{item.item}</Item.Meta>
								<Item.Meta>Quantity x {item.quantity}</Item.Meta>
							</Item.Description>
							<Item.Extra as="a">Additional Details</Item.Extra>
						</Item.Content>
					</Item>
					<Item className={'item-border border-right'}>
						<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
						<Item.Content>
							<Item.Meta as="h5">{item.isRequest ? 'Requesting' : 'Offering'}</Item.Meta>
							<Item.Header as="a">{item.organization}</Item.Header>
							<Item.Meta>{item.department}</Item.Meta>
							<Item.Description>
								<Item.Meta>{item.item}</Item.Meta>
								<Item.Meta>Quantity x {item.quantity}</Item.Meta>
							</Item.Description>
							<Item.Extra as="a">Additional Details</Item.Extra>
						</Item.Content>
					</Item>
					<Item className={'item-border border-right'}>
						<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
						<Item.Content>
							<Item.Meta as="h5">{item.isRequest ? 'Requesting' : 'Offering'}</Item.Meta>
							<Item.Header as="a">{item.organization}</Item.Header>
							<Item.Meta>{item.department}</Item.Meta>
							<Item.Description>
								<Item.Meta>{item.item}</Item.Meta>
								<Item.Meta>Quantity x {item.quantity}</Item.Meta>
							</Item.Description>
							<Item.Extra as="a">Additional Details</Item.Extra>
						</Item.Content>
					</Item> */}
					</Item.Group>
				);
			})}
		</Fragment>
	);
};

export default List;
