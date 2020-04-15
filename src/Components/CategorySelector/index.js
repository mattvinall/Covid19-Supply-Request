import React from 'react'
import { Button, Modal, Checkbox } from 'semantic-ui-react'
import { supplyOptions } from './../data';

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }



  render() {
    return (
      <Modal trigger={<Button>Filter</Button>}>
          <Modal.Description>
            <h1>Please select supply types:</h1>

            {supplyOptions.map(({key, text, value}) => 
              <Checkbox
                name={value} 
                label={text}
                checked={this.props.supplyList[value]}
                onChange={this.props.changeCategory}
              />)}
          </Modal.Description>
      </Modal>
    )}
}

export default CategorySelector
