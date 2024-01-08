import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);
  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        event.target.reset();
        console.log(loggedUser);
      })
      .catch((error) => console.log(error.message));
    console.log(email, password, name);
  };
  return (
    <div className="text-center">
      <h2 className="py-5 text-2xl font-semibold">Please Register</h2>
      <div>
        <form onSubmit={handleForm}>
          <input
            className="mb-3 border-2 p-1 rounded-md"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <br />
          <input
            className="mb-3 border-2 p-1 rounded-md"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <br />
          <input
            className="mb-3 border-2 p-1 rounded-md"
            type="password"
            name="password"
            placeholder="Your Password"
          />
          <br />
          <input
            className="mb-3 border-2 p-1 rounded-md cursor-pointer"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
