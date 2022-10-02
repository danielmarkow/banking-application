import {HashRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Alldata from "./components/Alldata";

import {UserContext} from "./context/UserContext";
import {LoginContext} from "./context/LoginContext";
// TODO implement protected routes
function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <br />
        <div className="container">
          <UserContext.Provider value={{users: [{name: "abel", email: "abel@mit.edu", password: "secret", balance: 100}, {name: "daniel", email: "daniel@nonreliant.me", password: "test1234", balance: 100}]}}>
            <LoginContext.Provider value={{email: ""}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/alldata" element={<Alldata />} />
              </Routes>
            </LoginContext.Provider>
          </UserContext.Provider>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
