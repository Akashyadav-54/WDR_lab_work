import React, { useState } from "react";
import UserForm from "./components/UserForm";
import DisplayData from "./components/DisplayData";

const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
  });

  return (
    <>
      <h2>React useState Assignment</h2>

      <UserForm setFormData={setFormData} />

      <DisplayData data={formData} />
    </>
  );
};

export default App;
