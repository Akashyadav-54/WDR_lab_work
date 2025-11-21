function SubjectList() {
  const subjects = [
    "Math",
    "Science",
    "English",
    "Computer",
    "History",
    "Geography"
  ];

  return (
    <ul>
      {subjects.map((sub, index) => (
        <li key={index}>{sub}</li>
      ))}
    </ul>
  );
}

export default SubjectList;
