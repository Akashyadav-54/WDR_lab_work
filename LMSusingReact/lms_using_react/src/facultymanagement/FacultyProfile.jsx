import { useParams } from "react-router-dom";
import FacultyNavBar from "./FacultyNavigationBar";

function FacultyProfile() {
  const { id } = useParams();

  const facultyData = {
    1: { name: "Rohit Sharma", email: "rohit@gmail.com", department: "CSE" },
    2: { name: "Neha Verma", email: "neha@gmail.com", department: "IT" },
  };

  const faculty = facultyData[id];

  return (
    <>
      <FacultyNavBar />

      <h2>Faculty Profile</h2>

      {faculty ? (
        <div>
          <p><strong>Name:</strong> {faculty.name}</p>
          <p><strong>Email:</strong> {faculty.email}</p>
          <p><strong>Department:</strong> {faculty.department}</p>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
}

export default FacultyProfile