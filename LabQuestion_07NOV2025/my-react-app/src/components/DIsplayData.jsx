import React from "react";

const DisplayData = ({ data }) => {
  return (
    <div>
      <h3>Entered Data</h3>
      <p>Name : {data.name}</p>
      <p>Email : {data.email}</p>
      <p>Phone : {data.phone}</p>
      <p>Age : {data.age}</p>
      <p>City : {data.city}</p>
    </div>
  );
};

export default DisplayData;
