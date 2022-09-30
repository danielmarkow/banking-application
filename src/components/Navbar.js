import {useState} from "react";
import {Link} from "react-router-dom";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // https://johnotu.medium.com/how-to-toggle-bootstrap-navbar-collapse-button-in-react-without-jquery-1d5c2fb0751c
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link
                className="navbar-brand"
                to="/"
                title="Banking Application Homepage"
            >Banking Application</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                      className="nav-link"
                      to="/"
                      title="Create a new account"
                  >Home</Link>
                </li>
                <li className="nav-item">
                  <Link
                      className="nav-link"
                      to="/create-account"
                      title="Create a new account"
                  >Create Account</Link>
                </li>
                <li className="nav-item">
                  <Link
                      className="nav-link"
                      to="/login"
                      title="Login to your account"
                  >Login</Link>
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
                      to="/withdraw"
                      title="Withdraw funds from your bank account"
                  >Withdraw</Link>
                </li>
                <li className="nav-item">
                  <Link
                      className="nav-link"
                      to="/alldata"
                      title="Show all data of the application"
                  >All Data</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  );
}

export default Navbar;