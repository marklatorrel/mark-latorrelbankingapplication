import { Card, Button, Form, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import { useUser } from "./UserContext";

function CreateAccount() {
  const { user, setUser } = useUser();
  const { allUsers, setAllUsers } = useUser();
  const [accountSuccess, setAccountSuccess] = useState(false);
  const [value, setValue] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    accountBalanceUsd: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    allUsers.push(value);
    setUser(value);
    setAllUsers(allUsers)
    setAccountSuccess(true);
    console.log(allUsers);
  };

  return (
    <Card className="content">
      <Card.Header>Create a new account</Card.Header>
      <Card.Body>
        {!accountSuccess && (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                className="input"
                placeholder="Enter your full name"
                onChange={(e) => setValue({ ...value, name: e.target.value, id: allUsers.length })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <FormControl
                placeholder="Email"
                type="email"
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create New Account
            </Button>
          </Form>
        )}
        {accountSuccess && (
          <div>
            <h1>Thanks {user.name} for creating an account</h1>
            <Button id="newaccount"
             variant="primary"
             onClick={() => setAccountSuccess(false)}
             >
              Create another account
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default CreateAccount;
