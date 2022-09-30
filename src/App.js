import {HashRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import Alldata from "./components/Alldata";

import {UserContext} from "./context/Context";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <br />
        <div className="container">
          <UserContext.Provider value={{users: [{name: "abel", email: "abel@mit.edu", password: "secret", balance: 100}]}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<Login />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/balance" element={<Balance />} />
              <Route path="/alldata" element={<Alldata />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
