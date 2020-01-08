import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "../DataJSON/data.json";
import "./BlogMenu.scss";

const preWorkTwo = data.PreWorkTwo;
const preWorkThree = data.PreWorkThree;
const preWorkFour = data.PreWorkFour;
const bootcampOne = data.BootcampOne;
const bootcampTwo = data.BootcampTwo;
const bootcampThree = data.BootcampThree;
const bootcampFour = data.BootcampFour;
const bootcampFive = data.BootcampFive;
const bootcampSix = data.BootcampSix;
// const bootcampSeven = data.BootcampSeven;
// const bootcampEight = data.BootcampEight;

const posts = [
  "PreWorkTwo",
  "PreWorkThree",
  "PreWorkFour",
  "BootcampOne",
  "BootcampTwo",
  "BootcampThree",
  "BootcampFour",
  "BootcampFive",
  "BootcampSix"
];

const routes = posts.map((item, idx) => {
  return {
    path: `/${item}`,
    sidebar: () => <div>{item}</div>,
    main: () => {
      return (
        <div key={idx}>
          <div>
            <h1>{data[item][0].Title}</h1>
            {data[item].map((q, idx) => {
                return(
                    <React.Fragment>
                        <h5>{q.Question}</h5>
                        <p>{q.Reply}</p>
                    </React.Fragment>
                );
            })}
          </div>
        </div>
      );
    }
  };
});

export default function BlogMenu() {
  return (
    <Router>
      <div style={{ display: "flex" }} class="sideMenu">
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
          class="menuTitle"
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Blog Main</Link>
            </li>
            {posts.map((item, idx) => {
              return (
                <li>
                  <Link to={`/${item}`}>{item}</Link>
                </li>
              );
            })}
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
