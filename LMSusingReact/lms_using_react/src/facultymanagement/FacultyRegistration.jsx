import { useForm } from "react-hook-form";
import FacultyNavBar from "./FacultyNavigationBar";

function FacultyRegistration() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Faculty Registered :", data);
  };

  return (
    <>
      <FacultyNavBar />

      <h2>Faculty Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>Name is required</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && <span>Valid email required</span>}
        </div>

        <div>
          <label>Department:</label>
          <input {...register("department", { required: true })} />
          {errors.department && <span>Department required</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default FacultyRegistration