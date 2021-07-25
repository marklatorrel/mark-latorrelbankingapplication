import React, { useState, useMemo } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navi from "./Navi";
import Home from "./Home";
import CreateAccount from "./Createaccount";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import AllData from "./Alldata";

import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "jane@me.com",
    password: "Access123",
    accountId: 0,
    accountBalanceUsd: 0,
  });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [allUsers, setAllUsers] = useState([
    {
      name: "Jane Doe",
      email: "jane@me.com",
      password: "Access123",
      accountId: "0",
      accountBalanceUsd: "0",
    },
    {
      name: "Peter Parker",
      email: "peter@mit.edu",
      password: "Passcode321",
      accountId: "1",
      accountBalanceUsd: "0",
    },
    {
      name: "John Smith",
      email: "john@msn.com",
      password: "Letmein33",
      accountId: "2",
      accountBalanceUsd: "0",
    },
  ]);

  return (
    <Router>
      <div>
        <Navi />
        <Switch>
          <UserContext.Provider value={value}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/Deposit/" component={Deposit} />
            <Route path="/Withdraw/" component={Withdraw} />
            <Route path="/Alldata/" component={AllData} />
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
