import { useState } from "react";
import useForm from "../hooks/useForm";
import CourseNavigationBar from "./CourseNavigationBar";

function CourseDetails() {
  const { values, errors, handleChange, validate } = useForm({
    courseid: "",
  });

  const [result, setResult] = useState(null); 
  const [noRecord, setNoRecord] = useState(false);

  const dummyDetails = {
    C101: { name: "Java Basics", desc: "OOP + Core Java", duration: 40 },
    C102: { name: "React JS", desc: "Hooks + Routing", duration: 60 },
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (validate(values)) {
      const id = values.courseid.trim();
      if (dummyDetails[id]) {
        setResult(dummyDetails[id]);
        setNoRecord(false);
      } else {
        setResult(null);
        setNoRecord(true);
      }
    }
  }

  return (
    <div>
      <CourseNavigationBar />

      <h2>Course Details</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="courseid"
          placeholder="Enter Course ID"
          value={values.courseid}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.courseid}</p>

        <button type="submit">Get Details</button>
      </form>

      {/* Result Found */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>{result.name}</h3>
          <p>{result.desc}</p>
          <p>Duration: {result.duration} hrs</p>
        </div>
      )}

      {/* No Result Found */}
      {noRecord && (
        <p style={{ marginTop: "20px", color: "red" }}>
          No course found with this Course ID.
        </p>
      )}
    </div>
  );
}

export default CourseDetails