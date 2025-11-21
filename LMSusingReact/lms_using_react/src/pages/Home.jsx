import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Welcome to LMS</h1>

      <h3 style={{ marginTop: "20px" }}>Select a Module:</h3>

      <div style={{ marginTop: "20px" }}>
        <Link to="/courses" style={{ marginRight: "20px" }}>
          Go to Course Management
        </Link>

        <Link to="/faculty">
          Go to Faculty Management
        </Link>
      </div>
    </div>
  );
}
