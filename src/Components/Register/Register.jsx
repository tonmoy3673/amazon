const Register = () => {
  return (
    <div className="text-center">
      <h2 className="py-5 text-2xl font-semibold">Please Register</h2>
      <div>
        <form>
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
