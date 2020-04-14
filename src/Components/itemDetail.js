import React from 'react';
import { Grid, Item, Icon } from 'semantic-ui-react';

const ItemDetail = (props) => {
    console.log('props', props);
		return (
			<Grid className="details-view" key={props.item.id} centered={true}>
				<Grid.Row>
					<h2> {props.item.message} </h2>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={16}>
						<Item.Group>
							<Item.Content style={{ textAlign: 'center' }}>
								<Item.Header
									style={{
										fontWeight: 500,
										fontSize: '1.6rem',
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
						<Item.Description
							style={{ border: '1px solid #bcbec0', padding: '15px 30px', textAlign: 'left' }}
						>
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
								<Item.Meta
									as="h3"
									style={{
										fontSize: '1.3rem',
										fontWeight: 400,
										borderBottom: '1px dotted #bcbec0'
									}}
								>
									<Icon as="i" name="mail" />Email:{' '}
									<a href={`mailto:${props.item.requestor_email}`}>{props.item.requestor_email}</a>
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
									<Icon as="i" name="medkit" /> Supply Type: {props.item.supplyType}
								</Item.Meta>
								<Item.Meta
									as="h3"
									style={{
										fontSize: '1.3rem',
										fontWeight: 400,
										borderBottom: '1px dotted #bcbec0'
									}}
								>
									Quantity
									<Icon as="i" name="times" />
									{props.item.quantity}
								</Item.Meta>
								<Item.Meta
									as="h3"
									style={{
										fontSize: '1.3rem',
										fontWeight: 400,
										borderBottom: '1px dotted #bcbec0'
									}}
								/>
							</Item.Content>
						</Item.Group>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
};

export default ItemDetail;
