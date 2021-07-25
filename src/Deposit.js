import {
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

import React from "react";


function Deposit() {

  return (
    <Card className="content">
      <Card.Header>Deposit</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="10">
              Your current balance is $10,000
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>¿How much would you like to deposit?</Form.Label>
            <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit">
            Deposit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default Deposit;
