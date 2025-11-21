import React from "react";

const UserForm = ({ setFormData }) => {

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <h3>Enter Details</h3>

      <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input name="phone" placeholder="Phone" onChange={handleChange} /><br /><br />
      <input name="age" placeholder="Age" onChange={handleChange} /><br /><br />
      <input name="city" placeholder="City" onChange={handleChange} /><br /><br />
    </div>
  );
};

export default UserForm;
