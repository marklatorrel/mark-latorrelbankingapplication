import {
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
  Row
} from "react-bootstrap";

import React, { useState } from "react";
import { useUser } from "./UserContext";

function Withdraw() {
  const { user, setUser } = useUser();
  const [balance, setBalance] = useState(user.accountBalanceUsd);
  const [value, setValue] = useState(user.accountBalanceUsd);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (value > user.accountBalanceUsd){
        alert("Insufficient money");
        return;
    } else if (isNaN(value)){
        alert("Write numbers only");
        return;
    }
    let newBalance = user.accountBalanceUsd - parseInt(value);
    user.accountBalanceUsd = newBalance
    console.log(user);
    setBalance(newBalance)
    setUser(user);
    alert("Succesfull Withdraw");
  };

  return (
    <Card className="content">
      <Card.Header>Withdraw</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="10">
              {user.name} your current balance is USD $ {balance}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>¿How much would you like to withdraw?</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                type="text"
                className="input"
                placeholder="Add an amount"
                onChange={(e) => setValue(e.target.value)}
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Button disabled={!value} variant="primary" type="submit">
            Withdraw
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default Withdraw;
