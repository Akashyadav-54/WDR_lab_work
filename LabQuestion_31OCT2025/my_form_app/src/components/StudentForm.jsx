import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [standard, setStandard] = useState("");

  return (
    <div>
      <h2>Enter Student Details</h2>

      <label>Name: </label>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <label>Age: </label>
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <label>Standard: </label>
      <input
        type="text"
        placeholder="Enter standard"
        value={standard}
        onChange={(e) => setStandard(e.target.value)}
      />
      <br /><br />

      <h3>Output</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Standard: {standard}</p>
    </div>
  );
}

export default StudentForm;
