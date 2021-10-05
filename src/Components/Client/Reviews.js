import React from "react";
import classes from "./Reviews.module.css";
import star from "./Images/star.png";

function Reviews(props) {
  const star1 = [];
  for (let i = 0; i < props.star; i++) {
    star1.push(i);
  }
  return (
    <div className={classes.review}>
      <div className={classes.name}>
        <span>{props.init}</span>
        <h4>{props.name}</h4>
      </div>
      <hr />
      {star1.map((val, i) => {
        return (
          <span key={i}>
            <img className={classes.img} src={star} alt={star} />
          </span>
        );
      })}
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Reviews;
