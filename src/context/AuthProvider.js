import {useState} from "react";

import { v4 as uuidv4 } from 'uuid';

import {users} from "../users";
import {AuthContext} from "./AuthContext";

function AuthProvider({children}) {

  const [token, setToken] = useState(null);
  const [userdata, setUserdata] = useState({});

  const authenticateUser = (credentials) => {
    const user = users
        .filter((u) =>
            u.email === credentials.email && u.password === credentials.password
        );

    const userExists = user.length !== 0

    if (userExists) {
      setUserdata(user[0]);
      return uuidv4();
    } else {
      return null;
    }
  };

  const createUser = (data) => {
      users.push({name: data.name, email: data.email, password: data.password, balance: 100});
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
    userdata,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onUserCreate: createUser,
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  );

}

export default AuthProvider;