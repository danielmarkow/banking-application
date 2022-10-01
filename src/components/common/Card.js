import {useContext} from "react";
import {LoginContext} from "../../context/LoginContext";

import {useNavigate} from "react-router-dom";

function Card({header, title, text, body, bgcolor, txtcolor}) {
  const loginCtx = useContext(LoginContext);

  const navigate = useNavigate();

  const classes = () => {
    const bg =  bgcolor ? " bg-" + bgcolor : " ";
    const txt = txtcolor ? " text-" + txtcolor : " text-white";
    return "card mb-3" + bg + txt;
  }

  const logoutUser = () => {
    loginCtx.email = "";
    navigate("/");
  };

  return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">
          {header}
        </div>
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {text && <p className="card-text">{text}</p>}
          {body}
          {/*{status && (<div id="createStatus">{status}</div>)}*/}
        </div>
        {loginCtx.email ? (
          <div className="card-footer">Logged in as: {loginCtx.email}
            <br />
            <button
                className="btn btn-light"
                onClick={logoutUser}
            >Log out</button>
          </div>
        ) : (
            <div className="card-footer">Not logged in!</div>
        )}
      </div>
  );
}

export default Card;