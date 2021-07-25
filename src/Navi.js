import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Navbar.Brand as={Link} to="/" id="home">Stratton Oakmont Bank</Navbar.Brand>
        </OverlayTrigger>

        <Nav className="me-auto">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("If you want to create a new bank account")}
            >
            <Nav.Link  as={Link} to="/Createaccount/" id="createaccount">Create Account</Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Make a deposit to your account")}
          >
            <Nav.Link   as={Link} to="/Deposit/" id="deposit">Deposit</Nav.Link>
          </OverlayTrigger>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("Get your money back")}
          >
            <Nav.Link as={Link} to="/Withdraw/" id="withdraw">Withdraw</Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("See the information")}
          >
            <Nav.Link as={Link} to="/Alldata/" id="alldata">All Data</Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
