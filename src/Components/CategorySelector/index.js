import React from 'react'
import { Button, Modal, Checkbox } from 'semantic-ui-react'
import { supplyOptions } from './../data';
import './styles.css';


const CategorySelector = (props) => {
    return (
      <Modal trigger={<Button>Filter</Button>}>
          <Modal.Description>
            <h1>Please select supply types:</h1>
              {supplyOptions.map(({key, text, value}) => 
                <Checkbox
                  className=''
                  key={key}
                  name={value} 
                  label={text}
                  checked={props.supplyCategories.get(value)}
                  onChange={props.changeCategory}
                />)}
          </Modal.Description>
      </Modal>
    )
}

export default CategorySelector
