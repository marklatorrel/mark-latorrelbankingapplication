import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navi from "./Navi";
import Home from "./Home";
import CreateAccount from "./Createaccount";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import AllData from "./Alldata";
import {UserProvider} from "./UserContext";

function App() {

  

  return (
    <Router>
      <div>
        <Navi />
        <Switch>
          <UserProvider>
            <Route path="/" exact component={Home}></Route>
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/Deposit/" component={Deposit} />
            <Route path="/Withdraw/" component={Withdraw} />
            <Route path="/Alldata/" component={AllData} />
          </UserProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
