import React, { Fragment } from 'react';
import { Item } from 'semantic-ui-react';
import firebase from '../firebase';
import Details from './Details.js';

const db = firebase.firestore();


function handleClick (e) {
	console.log(e);
	return(
		<Details messsage='data from the lists function'/> // this is where we send the item.id to the Details section.
	);
    console.log("they clicked on me!");
  }

const List = (props) => {
	return (
		<Fragment>
			{props.data.map((item, index) => {
				return (
					<Item.Group key={index}>
						<Item className={'item-border border-right'}>
							<Item.Content>
								<Item.Header as="h3">{item.item}</Item.Header>
								<Item.Description>
									<Item.Meta>{item.organization}</Item.Meta>
									<Item.Meta>Quantity x {item.quantity}</Item.Meta>
								</Item.Description>
								<Item.Extra as="a" onClick={handleClick(item.id)}>Additional Details</Item.Extra>
								<a onClick={handleClick(item.id)} style={{cursor: 'pointer'}}>More info</a>
							</Item.Content>
						</Item>
					</Item.Group>
				);
			})}
		</Fragment>
	);
};

export default List;
