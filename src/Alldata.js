import { useUser } from "./UserContext";
import { Card, Table} from "react-bootstrap";

function AllData() {
  const { allUsers } = useUser();


  function renderOneRow(person) {

    return (
      <tr key={person.id}>
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.password}</td>
      </tr>
    )
  }


  return (
    <Card className="content">
      <Card.Header>All the users</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
          {allUsers.map(renderOneRow)}


          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
export default AllData;
