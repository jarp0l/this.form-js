import React, { useEffect } from "react";
import { AuthContext } from "../src/context/auth-context";
import axios from "axios";

const Login = () => {
  const authContext = React.useContext(AuthContext);
  
  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated() ? router.push("/form") : router.push("/login");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    await axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              name="username"
              type="text"
              placeholder="Your username"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Your password"
            />
          </div>
        </div>

        <div className="control">
          <button className="button is-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
