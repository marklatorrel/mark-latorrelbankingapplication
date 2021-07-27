import { Card, Button, Form, FormControl } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";

function CreateAccount() {
  var success = false;
  var errors = { name: "", email: "", password: "" };
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

  const [error, setError] = useState(errors);

  useEffect(() => {
    console.log("Init of useEffect");
    console.log(value);
    console.log(accountSuccess);
    console.log(JSON.stringify(error));
    console.log("this is it");
    console.log("print" + success);
  }, [accountSuccess, error, value]);

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
    success = true;
    //Name validation
    if (!value.name) {
      errors = {
        ...errors,
        name: "Name can not be empty",
      };
      success = false;
    }

    if (value.name) {
      if (!value.name.match(/^[a-zA-Z ]+$/)) {
        errors = {
          ...errors,
          name: "The name must contain only letters",
        };
        success = false;
      }
    }

    if (!value.email) {
      errors= {
        ...errors,
        email: "Email can not be empty",
      };
      success = false;
    }

    if (!value.password) {
      errors= {
        ...errors,
        password: "Password can not be empty",
      };
      success = false;
    }
    if (value.password) {
      if (value.password.length < 8) {
        errors= {
          ...errors,
          password: "Password must have 8 or more characters",
        };
        success = false;
      }
    }

    setError({
      ...errors,
      errors,
    });

    return success;
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
              <p style={{ color: "red" }}>{error.name}</p>
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
              <p style={{ color: "red" }}>{error.email}</p>
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
              <p style={{ color: "red" }}>{error.password}</p>
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
              onClick={() => {
                setAccountSuccess("in-process");
                setError({
                  name: "",
                  email: "",
                  password: "",
                });
              }}
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
