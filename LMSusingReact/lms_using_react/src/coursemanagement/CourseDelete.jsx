import useForm from "../hooks/useForm";
import CourseNavigationBar from "./CourseNavigationBar";

function CourseDelete() {
  const { values, errors, handleChange, validate } = useForm({
    courseid: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (validate(values)) {
      alert("Course Deleted Successfully!");
    }
  }

  return (
    <div>
      <CourseNavigationBar />
      <h2>Delete Course</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="courseid"
          placeholder="Enter Course ID to Delete"
          value={values.courseid}
          onChange={handleChange}
        />
        <p>{errors.courseid}</p>

        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default CourseDelete