function Card({header, title, text, body}) {

  return (
      <div className="card mx-auto" style={{maxWidth: "23rem"}}>
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