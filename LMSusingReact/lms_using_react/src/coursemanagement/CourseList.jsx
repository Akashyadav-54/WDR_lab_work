import CourseNavigationBar from "./CourseNavigationBar";

function CourseList() {
  const dummyCourses = [
    { id: "C101", name: "Java Basics", duration: 40 },
    { id: "C102", name: "React JS", duration: 60 },
  ];

  return (
    <div>
      <CourseNavigationBar />
      <h2>Course List</h2>

      <ul>
        {dummyCourses.map((c) => (
          <li key={c.id}>
            {c.id} — {c.name} — {c.duration} hrs
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList