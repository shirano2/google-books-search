import React from "react";
import DeleteBtn from "../DeleteBtn";
import SaveBtn from "../SaveBtn";
import ViewBtn from "../ViewBtn";
import "./style.css";

function Card({title, author, description, image, link, handler, saved="default", match}) {
  return (
  <div className="card">
    <img className="card-img-top" src={image} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{title}
      {author || author==""? ` by ${author}` : "" } </h5>
      <p className="card-text">{description}</p>
      <ViewBtn target="_blank" href={link} />
      {match==="Search"? <SaveBtn saved={saved} onClick={handler} /> : <DeleteBtn onClick={handler} /> }
    </div>
  </div>
  );
}

export default Card;