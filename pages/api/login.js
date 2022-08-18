import React from "react";
import { AuthContext } from "../src/context/auth-context";

export default function handler(req, res) {
  const formData = req.body;

  const authContext = React.useContext(AuthContext);

  authContext.setUserAuthInfo(formData)


  res.status(200).json(formData);
}
