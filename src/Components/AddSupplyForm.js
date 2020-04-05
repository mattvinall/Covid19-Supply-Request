import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'sm', text: 'Surgical Masks', value: 'surgical_masks' },
  { key: 'n95', text: 'N95 Masks', value: 'n95_masks' },
  { key: 'fs', text: 'Face Shields', value: 'face_shields' },
  { key: 'c', text: 'Coveralls', value: 'coveralls' },
  { key: 'hs', text: 'Hazmat Suits', value: 'hazmat_suits' },
  { key: 'hc', text: 'Head Covering', value: 'head_covering' },
  { key: 'gogg', text: 'Goggles', value: 'goggles' },
  { key: 'go', text: 'Gowns', value: 'gowns' },
  { key: 'gl', text: 'Gloves', value: 'gloves' },
  { key: 'hansan', text: 'Hand Sanitizer', value: 'hand_sanitizer' },
  { key: 'wpb', text: 'Waterproof Boots', value: 'waterproof_boots' },
  { key: 'v', text: 'Ventilators', value: 'ventilators' },
  { key: 'vfil', text: 'Filters for Ventilators', value: 'filters' },
  { key: 'sc', text: 'Shoe Covering', value: 'shoe_covering' },
]

class AddSupplyForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group inline required='true'>
          <label>I am</label>
          <Form.Radio
            label='Requesting'
            value='req'
            checked='true' //{value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Offering'
            value='off'
            checked={value === 'md'}
            onChange={this.handleChange}
            disabled='true'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Supply Type'
            options={options}
            placeholder='— Select one'
            required='true'
          />
          <Form.Input fluid label='Quantity' placeholder='Quantity'/>
        </Form.Group>
        <Form.TextArea label='Description' placeholder='Tell us anything else about your request/offer. For example, brand/model, delivery instructions, etc.' />
        <Form.Group widths='equal'>
          <Form.Input fluid label='First Name' placeholder='First Name' required='true'/>
          <Form.Input fluid label='Last Name' placeholder='Last Name' required='true'/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Organization Name' placeholder='Organization Name' />
          <Form.Input fluid label='Department Name' placeholder='Department Name' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
          <Form.Input fluid label='Email Address' placeholder='Email Address' />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' /> 
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default AddSupplyForm;