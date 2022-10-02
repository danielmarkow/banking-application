import {useState} from "react";

import { v4 as uuidv4 } from 'uuid';

import {users} from "../users";
import {AuthContext} from "./AuthContext";


function AuthProvider({children}) {

  const [token, setToken] = useState(null);

  const authenticateUser = (credentials) => {
    const userExists = users
        .filter((u) =>
            u.email === credentials.email && u.password === credentials.password
        ).length !== 0
    if (userExists) {
      return uuidv4();
    } else {
      return null;
    }
  };

  const handleLogin = (credentials) => {
    const token = authenticateUser(credentials);
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  );

}

export default AuthProvider;