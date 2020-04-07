import React from 'react';
import { Grid, Segment, Container, Button, Icon, Header } from 'semantic-ui-react';

const Services = (props) => (
	<Container className="list__container">
		<Segment>
			<Grid>
				<Grid.Row>
					<Grid.Column>
						{props.data.map((data, id) => {
							return (
								<div key={id}>
									<Grid>
										<Grid.Row textAlign="cemter">
											<Grid.Column width={6}>
												<Header as="h4" content={data.item} />
											</Grid.Column>

											<Grid.Column width={6}>
												<Header as="h4" content={data.quantity} />
											</Grid.Column>

											<Grid.Column width={4}>
												<Header as="h5" content="April 20, 2020 4:30pm" />
											</Grid.Column>
										</Grid.Row>
									</Grid>
								</div>
							);
						})}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	</Container>
);

export default Services;
