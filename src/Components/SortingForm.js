import React from 'react'
import { Form, Col} from "react-bootstrap"

export default function SortingForm({params, onParamChange}) {
    return (
        <Form>
        <Form.Row className="align-items-end">
  <Form.Group as={Col} controlId="Sorting">
  <Form.Label>Sort by</Form.Label>
    <Form.Control onChange={onParamChange}  name="sort" as="select" custom>
    <option value="updated">Updated</option>
    <option value="created">Creation Date</option>
      <option value="full_name" >Name</option>
      
      
      
    </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="direction">
    <Form.Label>Order</Form.Label>
    <Form.Control onChange={onParamChange}  name="direction" as="select" custom>
    <option value="desc" >Descending </option>
      <option value="asc" >Ascending </option>
      
      
      
    </Form.Control>
  </Form.Group>
  <Form.Group as={Col} >
  <Form.Check onChange={onParamChange} value="" name="type" id="type" label="Any Type" type="radio" className="mb-2" inline={true} />
          <Form.Check onChange={onParamChange} value="sources" name="type" id="type" label="Not Forked only" type="radio" className="mb-2" inline={true} />
          <Form.Check onChange={onParamChange} value="forks" name="type" id="type" label="Forked only" type="radio" className="mb-2" inline={true}/>
        </Form.Group>
  </Form.Row>
</Form>
        
    )
}
