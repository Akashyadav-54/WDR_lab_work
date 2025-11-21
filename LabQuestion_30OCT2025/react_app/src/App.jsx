// src/App.jsx
import Faculty from "./components/Faculty";

function App() {
  const facultyData = {
    facName: "Ramesh",
    subject: "Java",
    experience: 13
  };

  return (
    <div>
      <h1>Passing Data Using Props</h1>

      <Faculty
        facName={facultyData.facName}
        subject={facultyData.subject}
        experience={facultyData.experience}
      />
    </div>
  );
}

export default App;
