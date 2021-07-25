import {
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
  Row
} from "react-bootstrap";

import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Withdraw() {
  const { user, setUser } = useContext(UserContext);
  const [value, setValue] = React.useState(user.accountBalanceUsd);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(typeof value);
    console.log(typeof user.accountBalanceUsd);
    let newBalance = user.accountBalanceUsd + parseInt(value);
    user.accountBalanceUsd = newBalance
    console.log(user);
    setUser(user);
    //alert("Succesfull Withdraw");
  };

  return (
    <Card className="content">
      <Card.Header>Withdraw</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="10">
              {user.name} your current balance is $ {user.accountBalanceUsd}
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>¿How much would you like to withdraw?</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                aria-label="Amount (to the nearest dollar)"
                type="number"
                className="input"
                placeholder="Add Todo..."
                onChange={(e) => setValue(e.target.value)}
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit">
            Withdraw
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default Withdraw;
