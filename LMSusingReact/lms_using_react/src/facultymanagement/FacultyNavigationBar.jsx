import { Link } from "react-router-dom";

function FacultyNavigationBar() {
  return (
    <div style={{ padding: "10px", background: "#e9e9e9", marginBottom: "20px" }}>
      <h2>Faculty Management</h2>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/faculty/register">Register</Link>
        <Link to="/faculty/list">List</Link>
        <Link to="/faculty/profile">Profile</Link>
        <Link to="/faculty/update">Update</Link>
      </nav>
    </div>
  );
}

export default FacultyNavigationBar