import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../src/context/auth-context";

const Form = () => {
  const router = useRouter();
  const authContext = React.useContext(AuthContext);

  useEffect(() => {
    // checks if the user is authenticated
    authContext.isUserAuthenticated() ? router.push("/form") : router.push("/login");
  }, []);

  return (
    <React.Fragment>
      <header>
        <title>Dashboard</title>
      </header>
      <div>
        <h2>Dashboard</h2>
      </div>
    </React.Fragment>
  );
};

export default Form;
