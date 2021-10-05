import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import trustfirms from "./Images/TrustFirms.png";
import TrustPilot from "./Images/logo-white.svg";
import blackTransparent from "./Images/blackTransparent.svg";
import Goodfirms from "./Images/goodfirms-blue.svg";
import Bark from "./Images/barklogo-dark.png";
import SEM from "./Images/Logo_sem.png";
import TopD from "./Images/top_developers.svg";
import Card from "./Card";
import classes from "./Card.module.css";
import Review from "./Reviews";
import _ from "lodash";
import cl from "./client.json";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Client() {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div className={classes.client}>
      <Navbar />
      <div className={classes.cardContainer}>
        {/* <Link to={`${url}/trust-firms`}>
          <Card src={trustfirms} alt="tf" />
        </Link> */}
        <Link to={`${url}/trust-pilot`}>
          <Card src={TrustPilot} alt="TR" bc="#eaeaea" />
        </Link>
        {/* <Link to={`${url}/wadline`}>
          <Card src={blackTransparent} alt="bt" />
        </Link> */}
        <Link to={`${url}/goodfirms`}>
          <Card src={Goodfirms} alt="GF" />
        </Link>
        {/* <Link to={`${url}/bark`}>
          <Card src={Bark} alt="Bark" />
        </Link> */}
        <Link to={`${url}/semfirms`}>
          <Card src={SEM} alt="sem" />
        </Link>
        <Link to={`${url}/topdevelopers`}>
          <Card src={TopD} alt="top" />
        </Link>
      </div>
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:websiteName`}>
          <AllReviews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function AllReviews() {
  let { websiteName } = useParams();
  const WebName = _.toLower(_.camelCase(websiteName));
  const f = Object.values(cl).find(
    ({ website }) => website.toLocaleLowerCase() === WebName
  );
  console.log(f);

  return (
    <div>
      <h1 className={classes.h1}>{f.website}</h1>
      <div className={classes.reviews}>
        {f.reviews &&
          f.reviews.map((val, i) => {
            let ln = val.name.indexOf(" ") + 1;
            // console.log(ln.indexOf(" "));
            let str = val.name.substr(0, 1) + val.name.substr(ln, 1);
            // let str;
            return (
              <Review
                key={i}
                init={str}
                name={val.name}
                star={val.rating}
                title={val.title}
                content={val.content}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Client;
