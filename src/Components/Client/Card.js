import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={classes.card}
      style={props.bc && { backgroundColor: props.bc }}
    >
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Card;
