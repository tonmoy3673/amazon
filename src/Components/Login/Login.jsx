const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="py-5 text-2xl font-semibold">Please Login</h2>
        <div>
          <form onSubmit={handleLogin}>
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
    </div>
  );
};

export default Login;
