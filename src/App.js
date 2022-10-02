import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Alldata from "./components/Alldata";
import NoMatch from "./components/NoMatch";
import ProtectedRoute from "./components/ProtectedRoute";

import AuthProvider from "./context/AuthProvider";

function App() {

  return (
    <>
      <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <br />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<Login />} />
              <Route
                  path="/deposit"
                  element={
                    <ProtectedRoute>
                      <Deposit />
                    </ProtectedRoute>
                  }
              />
              <Route
                  path="/withdraw"
                  element={
                    <ProtectedRoute>
                      <Withdraw />
                    </ProtectedRoute>
                  }
              />
              <Route path="/alldata" element={<Alldata />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
