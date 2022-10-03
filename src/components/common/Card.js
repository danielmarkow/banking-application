import {useNavigate} from "react-router-dom";

function Card({header, title, text, body, bgcolor, txtcolor}) {

  const navigate = useNavigate();

  const classes = () => {
    const bg =  bgcolor ? " bg-" + bgcolor : " ";
    const txt = txtcolor ? " text-" + txtcolor : " text-white";
    return "card mb-3" + bg + txt;
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
        </div>
      </div>
  );
}

export default Card;