import React from 'react'
import { Form, Col } from "react-bootstrap"

export default function SortForm({params, onParamChange}) {
    return (
        <Form className="my-3">
        <Form.Row className="align-items-end">
  <Col xs={12} md={6} lg={3}>
  <Form.Label>Sort by</Form.Label>
    <Form.Control onChange={onParamChange}  name="sort" as="select" custom>
    <option value="updated">Updated time</option>
    <option value="created">Created time</option>
      <option value="full_name" >Full Name</option>
      
      
      
    </Form.Control>
    </Col>

    <Col xs={12} md={6} lg={3}>
    <Form.Label>Order</Form.Label>
    <Form.Control onChange={onParamChange}  name="direction" as="select" custom>
    <option value="desc" >Descending </option>
      <option value="asc" >Ascending </option>
      
      
      
    </Form.Control>
    </Col>
    <Col xs={12} md={12} lg={6} className="mt-3">
  <Form.Check onChange={onParamChange} value="" name="type" id="type" label="Any Type" type="radio" className="mb-2" inline={true} />
          <Form.Check onChange={onParamChange} value="sources" name="type" id="type" label="Not Forked only" type="radio" className="mb-2" inline={true} />
          <Form.Check onChange={onParamChange} value="forks" name="type" id="type" label="Forked only" type="radio" className="mb-2" inline={true}/>
        </Col>
  </Form.Row>
</Form>
        
    )
}
