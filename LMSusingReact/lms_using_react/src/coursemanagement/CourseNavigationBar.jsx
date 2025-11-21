import { Link } from "react-router-dom";

function CourseNavigationBar() {
  return (
    <div style={{ padding: "10px", background: "#e9e9e9", marginBottom: "20px" }}>
      <h2>Course Management</h2>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/courses/register">Register</Link>
        <Link to="/courses/list">List</Link>
        <Link to="/courses/details">Details</Link>
        <Link to="/courses/update">Update</Link>
        <Link to="/courses/delete">Delete</Link>
      </nav>
    </div>
  );
}

export default CourseNavigationBar