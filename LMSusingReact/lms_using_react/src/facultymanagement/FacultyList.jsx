import FacultyNavBar from "./FacultyNavigationBar";
import { Link } from "react-router-dom";

function FacultyList() {
  const facultyData = [
    { id: 1, name: "Aryan Singh", department: "CSE" },
    { id: 2, name: "Neha Verma", department: "IT" },
  ];

  return (
    <>
      <FacultyNavBar />

      <h2>Faculty List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Dept</th>
            <th>Profile</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((f) => (
            <tr key={f.id}>
              <td>{f.name}</td>
              <td>{f.department}</td>
              <td>
                <Link to={`/faculty/profile/${f.id}`}>View</Link>
              </td>
              <td>
                <Link to={`/faculty/update/${f.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FacultyList