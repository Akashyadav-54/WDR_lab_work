import useForm from "../hooks/useForm";
import CourseNavigationBar from "./CourseNavigationBar";

function CourseRegistration() {
  const { values, errors, handleChange, validate } = useForm({
    courseid: "",
    coursename: "",
    description: "",
    duration: "",
    min_enrollment: "",
    max_enrollment: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (validate(values)) {
      alert("Course Registered Successfully!");
    }
  }

  return (
    <div>
      <CourseNavigationBar />

      <h2>Course Registration</h2>

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
          placeholder="Course Name"
          value={values.coursename}
          onChange={handleChange}
        />
        <p>{errors.coursename}</p>

        <textarea
          name="description"
          placeholder="Description"
          value={values.description}
          onChange={handleChange}
        />
        <p>{errors.description}</p>

        <input
          name="duration"
          type="number"
          placeholder="Duration in hours"
          value={values.duration}
          onChange={handleChange}
        />
        <p>{errors.duration}</p>

        <input
          name="min_enrollment"
          type="number"
          placeholder="Minimum Enrollment"
          value={values.min_enrollment}
          onChange={handleChange}
        />
        <p>{errors.min_enrollment}</p>

        <input
          name="max_enrollment"
          type="number"
          placeholder="Maximum Enrollment"
          value={values.max_enrollment}
          onChange={handleChange}
        />
        <p>{errors.max_enrollment}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default CourseRegistration