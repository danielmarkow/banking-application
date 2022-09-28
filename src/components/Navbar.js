import {Link} from "react-router-dom";

function Navbar() {
  return (
      <>
        <Link to="/">BadBank</Link>
        <Link to="/create-account">Create Account</Link>
        <Link to="/login">Login</Link>
        <Link to="/deposit">Deposit</Link>
        <Link to="/withdraw">Withdraw</Link>
        <Link to="/balance">Balance</Link>
        <Link to="/alldata">All Data</Link>
      </>
  );
}

export default Navbar;