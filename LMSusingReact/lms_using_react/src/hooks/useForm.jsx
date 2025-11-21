import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function validate(fields) {
    let temp = {};

    Object.keys(fields).forEach((key) => {
      if (!values[key] || values[key].toString().trim() === "") {
        temp[key] = "Field is required";
      }
    });

    setErrors(temp);
    return Object.keys(temp).length === 0;
  }

  return { values, errors, handleChange, validate };
}

export default useForm