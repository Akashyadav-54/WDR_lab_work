import useForm from "../hooks/useForm";
import CourseNavigationBar from "./CourseNavigationBar";

function CourseUpdate() {
  const { values, errors, handleChange, validate } = useForm({
    courseid: "",
    coursename: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (validate(values)) {
      alert("Course Updated Successfully!");
    }
  }

  return (
    <div>
      <CourseNavigationBar />

      <h2>Update Course</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="courseid"
          placeholder="Course ID"
          value={values.courseid}
          onChange={handleChange}
        />
        <p>{errors.courseid}</p>

        <input
          name="coursename"
          placeholder="Updated Course Name"
          value={values.coursename}
          onChange={handleChange}
        />
        <p>{errors.coursename}</p>

        <textarea
          name="description"
          placeholder="Updated Description"
          value={values.description}
          onChange={handleChange}
        />
        <p>{errors.description}</p>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CourseUpdate