import React from 'react';
import { Grid, Item } from 'semantic-ui-react';

const url =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.678311590589!2d-79.60987388407186!3d43.57158577912428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b46f6239a840d%3A0x95ad626d2073d91e!2sTrillium%20Health%20Partners%20-%20Mississauga%20Hospital!5e0!3m2!1sen!2sca!4v1586571205053!5m2!1sen!2sca';
const Details = (props) => {
	{
		return props.data.map((item, index) => {
			return (
				// <List />
				<Grid className="details-view" key={index} centered={true}>
					<Grid.Row>
						<Grid.Column width={16}>
							<Item.Group>
								<Item.Content style={{ textAlign: 'center' }}>
									<Item.Header
										style={{
											fontWeight: 500,
											fontSize: '2.0rem',
											paddingBottom: '5px'
											// borderBottom: '1px solid #bcbec0'
										}}
										as="h4"
									>
										{item.organization}, {item.department}
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
								<Item.Meta as="p">
									lorem ipsum dola sit. lorem ipsum dola sit.lorem ipsum dola sit.lorem ipsum dola
									sit.lorem ipsum dola sit.lorem ipsum dola sit.lorem ipsum dola sit.lorem ipsum dola
									sit.lorem ipsum dola sit.lorem ipsum dola sit.lorem ipsum dola sit.lorem ipsum dola
									sit.lorem ipsum dola sit.lorem ipsum dola sit.lorem ipsum dola sit.lorem ipsum dola
									sit.lorem ipsum dola sit.
								</Item.Meta>
							</Item.Description>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={8}>
							<iframe
								src={url}
								style={{
									width: '300px',
									height: '300px',
									border: '0',
									ariaHidden: 'false',
									tabindex: '0'
								}}
							/>
						</Grid.Column>
						<Grid.Column width={8}>
							<Item.Group>
								<Item.Header as="h2" style={{ fontSize: '2rem', fontWeight: 500 }}>
									Additional Details:
								</Item.Header>
								<Item.Content>
									<Item.Meta
										as="h3"
										style={{
											fontSize: '1.5rem',
											fontWeight: 400,
											borderBottom: '1px dotted #bcbec0'
										}}
									>
										Requested by: {item.requestor_name}
									</Item.Meta>
									<Item.Meta
										as="h3"
										style={{
											fontSize: '1.5rem',
											fontWeight: 400,
											borderBottom: '1px dotted #bcbec0'
										}}
									>
										Phone: {item.requestor_phone}
									</Item.Meta>
									<Item.Meta
										as="h3"
										style={{
											fontSize: '1.5rem',
											fontWeight: 400,
											borderBottom: '1px dotted #bcbec0'
										}}
									>
										Email: {item.requestor_email}
									</Item.Meta>
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
