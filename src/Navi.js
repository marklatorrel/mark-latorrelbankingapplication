import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {useState} from 'react';



function Navi() {


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
          <Navbar.Brand href="/">Stratton Oakmont Bank</Navbar.Brand>
        </OverlayTrigger>

        <Nav className="me-auto">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("If you want to create a new bank account")}
            >
            <Nav.Link  href="/Createaccount/">Create Account</Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Make a deposit to your account")}
          >
            <Nav.Link  href="/Deposit/">Deposit</Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Get your money back")}
          >
            <Nav.Link href="/Withdraw/">Withdraw</Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("See the information")}
          >
            <Nav.Link href="/Alldata/">All Data</Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
