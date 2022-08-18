import React, { useState } from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const { authState, setAuthState } = useState({
    isLoggedIn: false,
    token: null,
    login: () => {},
    logout: () => {},
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const setUserAuthInfo = ({ data }) => {
    const token = localStorage.setItem("token", data.password);
    // const token = cookie.setItem("token", data.data);

    setAuthState({
      token,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => !!authState.token;

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
