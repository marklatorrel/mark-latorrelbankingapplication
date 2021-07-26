import { useUser } from "./UserContext";
import { Card, Table} from "react-bootstrap";

function AllData() {
  const { user, setUser } = useUser();
  const { allUsers, setAllUsers } = useUser();


  function renderOneRow(person) {

    return (
      <tr >
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.password}</td>
      </tr>
    )
  }


  return (
    <Card className="content">
      <Card.Header>All the user</Card.Header>
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
