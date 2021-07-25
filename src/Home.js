import bankImage from "./stratton.png";

import {
  Card,
Container,
  Row,
  Col,
} from "react-bootstrap";

function Home() {
  return (
    <Card className="content">
      <Card.Header>Welcome</Card.Header>
      <Card.Body>
      <Container fluid="md">
      <Row>
      <Col></Col>
        <Col style={{paddingTop: '50px'}}>
          <img className="image" src={bankImage}  style={{margin: '50px'}} width="200"  />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
        <h1 className="text-center" style={{paddingTop: '50px'}}>The bank you can trust</h1>
        </Col>
      </Row>
      
    </Container>
      </Card.Body>
    </Card>
  );
}
export default Home;
