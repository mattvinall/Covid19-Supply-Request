import React from 'react';
import { Grid, Item, Icon } from 'semantic-ui-react';

const ItemDetail = (props) => {
	console.log(props.item)
	return (
		props.item ? 
			<Grid className="details-view" key={props.item.id}>
				<Grid.Row>
					<Grid.Column width={16} style={{ paddingBottom: '25px' }}>
						<Item.Group style={{ textAlign: 'center', borderBottom: '1px solid #bcbec0' }}>
							<Item.Content style={{ textAlign: 'center' }}>
								<Item.Header
									style={{
										fontWeight: 500,
										fontSize: '2.2rem',
										paddingBottom: '5px'
										// borderBottom: '1px solid #bcbec0'
									}}
									as="h3"
								>
									Requested : <Icon as="i" name="medkit" /> {props.item.supplyType} x{' '}
									{props.item.quantity}
								</Item.Header>
							</Item.Content>
						</Item.Group>
					</Grid.Column>
					<Grid.Column width={16}>
						<Item.Group style={{ textAlign: 'center' }}>
							<Item.Content style={{ textAlign: 'center' }}>
								<Item.Header
									style={{
										fontWeight: 400,
										fontSize: '1.8rem',
										paddingBottom: '5px'
										// borderBottom: '1px solid #bcbec0'
									}}
									as="h4"
								>
									<Icon as="i" name="hospital" /> {props.item.organization}, {props.item.department}
								</Item.Header>
							</Item.Content>
						</Item.Group>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={16}>
						<Item.Description style={{ border: '1px solid #bcbec0', padding: '15px 30px', textAlign: 'left' }}>
							<Item.Meta as="p">{props.item.description}</Item.Meta>
						</Item.Description>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={8}>
						<Item.Group>
							<Item.Content>
								<Item.Meta
									as="h3"
									style={{
										fontSize: '1.3rem',
										fontWeight: 400,
										borderBottom: '1px dotted #bcbec0'
									}}
								>
									<Icon as="i" name="user" />Requested by: {props.item.firstName} {props.item.lastName}
								</Item.Meta>
								<Item.Meta
									as="h3"
									style={{
										fontSize: '1.3rem',
										fontWeight: 400,
										borderBottom: '1px dotted #bcbec0'
									}}
								>
									<Icon as="i" name="phone" />Phone:{' '}
									<a href={`tel:${props.item.requestor_phone}`}>{props.item.requestor_phone}</a>
								</Item.Meta>
							</Item.Content>
						</Item.Group>
					</Grid.Column>
					<Grid.Column width={8}>
						<Item.Group>
							<Item.Content>
								<Item.Meta
									as="h3"
									style={{
										fontSize: '1.3rem',
										fontWeight: 400,
										borderBottom: '1px dotted #bcbec0'
									}}
								>
									<Icon as="i" name="mail" />Email:
									<a href={`mailto:${props.item.requestor_email}`}>{props.item.requestor_email}</a>
								</Item.Meta>
							</Item.Content>
						</Item.Group>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			:
			<h5 className="item-detail-empty">Please select an item for more details</h5>
	);
};

export default ItemDetail;
