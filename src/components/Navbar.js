import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import useAuth from "../hooks/useAuth";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const {token, onLogout} = useAuth();

  const navigate = useNavigate();

  // https://johnotu.medium.com/how-to-toggle-bootstrap-navbar-collapse-button-in-react-without-jquery-1d5c2fb0751c
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
      <>
        <nav
            className="navbar navbar-light navbar-expand-md justify-content-center"
            style={{backgroundColor: "#DFE0E2"}}
        >
          <Link
              to="/"
              className="navbar-brand d-flex w-50 mr-auto"
              title="Banking Application Homepage"
          >Banking Application</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse w-100`} id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-center">
              <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/"
                    title="Homepage of the banking application"
                >Home</Link>
              </li>
              <li className="nav-item">
                <Link
                    className="nav-link"
                    style={{whiteSpace: "nowrap"}}
                    to="/create-account"
                    title="Create a new account"
                >Create Account</Link>
              </li>
              <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/withdraw"
                    title="Withdraw funds from bank account"
                >Withdraw</Link>
              </li>
              <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/deposit"
                    title="Deposit funds to bank account"
                >Deposit</Link>
              </li>
              <li className="nav-item">
                <Link
                    className="nav-link"
                    style={{whiteSpace: "nowrap"}}
                    to="/alldata"
                    title="Show all data of the application"
                >All Data</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              {token ? (
                    <button
                        className="btn"
                        style={{backgroundColor: "#EB5160", marginRight: "1vw"}}
                        onClick={onLogout}
                    >Log out</button>
                ) : (
                    <button
                        className="btn"
                        style={{backgroundColor: "#EB5160", marginRight: "1vw"}}
                        onClick={() => navigate("/login")}
                    >Login</button>
                )
              }
            </ul>
          </div>
        </nav>
      </>
  );
}

export default Navbar;