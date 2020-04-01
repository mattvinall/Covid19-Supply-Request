import React from 'react';
import { Form, Icon, Header, Grid, Segment, Container } from 'semantic-ui-react';

const Navigation = () => {
	return (
		<Container>
			<Header as="h1" content="COVID-19 Supply" textAlign="center" />
			<Grid>
				<Grid.Row style={{ display: 'flex' }}>
					<Grid.Column width="6">
						<Form>
							<Form.Input fluid label="search" placeholder="search items" />
						</Form>
					</Grid.Column>
					<Grid.Column width="10" textAlign="right" style={{ margin: 'auto' }}>
						<Icon name="plus" size="large" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
};

export default Navigation;
