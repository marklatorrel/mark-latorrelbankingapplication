import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Navi() {

    const [underline, setUnderline] = useState("");



  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip">{props}</Tooltip>   
  );

  return (
    <Navbar className="color-nav" variant="dark">
      <Container>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Homepage")}
        >
          <Navbar.Brand className={(underline === "homepage") ? 'underline' : ''} as={Link} to="/" id="home"
          onClick={() => setUnderline("homepage")}>Stratton Oakmont Bank</Navbar.Brand>
        </OverlayTrigger>

        <Nav className="me-auto">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("If you want to create a new bank account")}
            >
            <Nav.Link className={(underline === "createaccount") ? 'underline' : ''} as={Link} to="/Createaccount/" id="createaccount"
            onClick={() => setUnderline("createaccount")}>Create Account</Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Make a deposit to your account")}
          >
            <Nav.Link className={(underline === "deposit") ? 'underline' : ''} as={Link} to="/Deposit/" id="deposit"
            onClick={() => setUnderline("deposit")}>Deposit</Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Get your money back")}
          >
            <Nav.Link className={(underline === "withdraw") ? 'underline' : ''} as={Link} to="/Withdraw/" id="withdraw"
            onClick={() => setUnderline("withdraw")}>Withdraw</Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("See the information")}
          >
            <Nav.Link className={(underline === "alldata") ? 'underline' : ''} as={Link} to="/Alldata/" id="alldata"
             onClick={() => setUnderline("alldata")}>All Data</Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
