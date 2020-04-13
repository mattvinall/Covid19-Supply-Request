import React from 'react';
import { Grid, Item, Icon } from 'semantic-ui-react';
// import firebase from '../firebase';
// import List from './List.js';

const Details = (props) => {
	{
		return props.data.map((item, index) => {
			return (
				<Grid className="details-view" key={index} centered={true}>
					<Grid.Row>
						<h2> {item.message} </h2>
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
										<Icon as="i" name="hospital" /> {item.organization}, {item.department}
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
								<Item.Meta as="p">{item.description}</Item.Meta>
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
										<Icon as="i" name="user" />Requested by: {item.firstName} {item.lastName}
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
										<a href={`tel:${item.requestor_phone}`}>{item.requestor_phone}</a>
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
										<a href={`mailto:${item.requestor_email}`}>{item.requestor_email}</a>
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
										<Icon as="i" name="medkit" /> Supply Type: {item.supplyType}
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
										{item.quantity}
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
		});
	}
};

export default Details;
