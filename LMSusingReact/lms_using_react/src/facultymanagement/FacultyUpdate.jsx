import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import FacultyNavBar from "./FacultyNavigationBar";

function FacultyUpdate() {
  const { id } = useParams();

  const defaultData = {
    1: { name: "Rohit Sharma", email: "rohit@gmail.com", department: "CSE" },
    2: { name: "Neha Verma", email: "neha@gmail.com", department: "IT" },
  };

  const { register, handleSubmit } = useForm({
    defaultValues: defaultData[id],
  });

  const onSubmit = (data) => {
    console.log("Updated Faculty :", data);
  };

  return (
    <>
      <FacultyNavBar />

      <h2>Update Faculty</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register("name")} />
        </div>

        <div>
          <label>Email:</label>
          <input {...register("email")} />
        </div>

        <div>
          <label>Department:</label>
          <input {...register("department")} />
        </div>

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default FacultyUpdate