import React from 'react';
import { Item, Segment, Image } from 'semantic-ui-react';

const List = (props) => (
	<Segment>
		{props.data.map((item, index) => {
			return (
				<Item.Group key={index + 1} className="col-xs-4 col-lg-4">
					{/*<Item className={'item-border border-right'}>
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
					</Item >*/}
					{ <Item>
						<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
						<Item.Content>
							<Item.Header as="a">Ventilators</Item.Header>
							<Item.Meta>x 400</Item.Meta>
							<Item.Description>
								<Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
							</Item.Description>
							<Item.Extra>Additional Details</Item.Extra>
						</Item.Content>
					</Item>}
					{ <Item>
						<Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
						<Item.Content>
							<Item.Header as="a">Masks</Item.Header>
							<Item.Meta>x 20,000</Item.Meta>
							<Item.Description>
								<Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
							</Item.Description>
							<Item.Extra>Additional Details</Item.Extra>
						</Item.Content>
					</Item>}
				</Item.Group>
			);
		})}
	</Segment>
);

export default List;
