import { Card, Button, Form, FormControl } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";

function CreateAccount() {
  var success = false;

  const { user, setUser } = useUser();
  const { allUsers, setAllUsers } = useUser();
  const [accountSuccess, setAccountSuccess] = useState("in-process");
  const [value, setValue] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    accountBalanceUsd: 0,
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(accountSuccess);
    console.log(JSON.stringify(error));
  }, [accountSuccess, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    handleValidation();
    if (success) {
      console.log("The form has been a success");
      allUsers.push(value);
      setUser(value);
      setAllUsers(allUsers);
      setAccountSuccess(true);
      console.log(allUsers);
      setValue({
        id: 0,
        name: "",
        email: "",
        password: "",
        accountBalanceUsd: 0,
      });
      setAccountSuccess("success");
    } else {

      setAccountSuccess("no-success");
    }
  };

  function handleValidation() {

    //Name validation
    if (value.name === "") {
      error.name = "Name cannot be empty";
      return (success = false);
    }

    if (value.name !== null) {
      if (!value.name.match(/^[a-zA-Z]+$/)) {
        setError({
          ...error,
          name: "The name must contain only letters"});
        return (success = false);
      }
    }

    return (success = true);
  }

  return (
    <Card className="content">
      <Card.Header>Create a new account</Card.Header>
      <Card.Body>
        {(accountSuccess === "in-process" ||
          accountSuccess === "no-success") && (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                className="input"
                placeholder="Enter your full name"
                onChange={(e) =>
                  setValue({
                    ...value,
                    name: e.target.value,
                    id: allUsers.length,
                  })
                }
              />
            <p>{error.name}</p>
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
        {accountSuccess === "success" && (
          <div>
            <h1>Thanks {user.name} for creating an account</h1>
            <Button
              id="newaccount"
              variant="primary"
              onClick={() => setAccountSuccess("in-process")}
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
