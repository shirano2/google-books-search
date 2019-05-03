import React from "react";
//import CardBtn from "../CardBtn";
import DeleteBtn from "../DeleteBtn";
import SaveBtn from "../SaveBtn";
import ViewBtn from "../ViewBtn";
import "./style.css";

function Card({title, author, description, image, link, handler, index, match}) {
  return (
  <div className="card">
    <img className="card-img-top" src={image} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{title}
      {author || author==""? ` by ${author}` : "" } </h5>
      <p className="card-text">{description}</p>
      {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      <ViewBtn target="_blank" href={link} />
      {match==="Search"? <SaveBtn onClick={()=>handler(index)} /> : <DeleteBtn onClick={()=>handler(index)} /> }
    </div>
  </div>
  );
}

{/* <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div> */}

export default Card;
