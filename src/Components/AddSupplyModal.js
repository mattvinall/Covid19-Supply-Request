import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const AddSupplyModal = () => (
  <Modal trigger={<Button>+</Button>}>
    <Modal.Header>Add Supplies</Modal.Header>
    <Modal.Content scrolling>
        
      {/* <Modal.Description>
        <Header>Modal Header</Header>
        <p>
          This is an example of expanded content that will cause the modal's
          dimmer to scroll
        </p>
      </Modal.Description> */}
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Submit
      </Button>
      <Button cancel>
        Cancel
      </Button>
    </Modal.Actions>
  </Modal>
)

export default AddSupplyModal;