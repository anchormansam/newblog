import React from "react";
import ReactDOM from "react-dom";
import "./NavBar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InfoCards from "../InfoCard/InfoCards";
import InfoAccordion from "../Accordion/Accordion";
import HomeView from "../HomeView/HomeView";
import MediaQuery from "react-responsive";
import BlogPost from "../BlogPost/Blog"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar id="navBarBackground" light expand="md">
            <NavbarBrand href="/home" to="/home" id="webSiteTitle">
              Sam Wheeling
            </NavbarBrand>
            <NavbarToggler onClick={this.updateState} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem></NavItem>

                <React.Fragment>
                  <NavItem>
                    <Link id="navLinks" to="/home"></Link>
                  </NavItem>

                  <NavbarBrand href="/home" to="/home" id="menuTitle">
                    Home
                  </NavbarBrand>

                  <NavbarBrand href="/aboutme" to="/aboutme" id="menuTitle">
                    About Me
                  </NavbarBrand>

                  <NavbarBrand
                    href="/blog"
                    to="/blog"
                    id="menuTitle"
                  >
                    Blog
                  </NavbarBrand>
                </React.Fragment>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <React.Fragment>
              <Route path="/"></Route>

              <Route path="/home">
                <HomeView />
                <MediaQuery minDeviceWidth="900px">
                  {matches => (matches ? <InfoCards /> : <InfoAccordion />)}
                </MediaQuery>
              </Route>

              <Route path="/aboutme">
                
              </Route>

              <Route path="/blog">
                <BlogPost />

              </Route>
            </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}
// const menuTitle = [
//   "Home",
//   "About Me",
//   "Contact",
//   "Blog",
// ];

// function NavBar(props) {
//   const mappedList = menuTitle.map((item, idx) => {
//     return (
//       <li key={idx} className="nav-item ">
//         <a className="nav-link btn btn-link text-white" href={item}>{item}</a>
//       </li>
//     )
//   });

//   return (
//     <Navbar id="navbarColor" className="navbar navbar-expand-lg navbar-light bg-dark" sticky="top">
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <a className="navbar-brand text-white" href="https://www.linkedin.com/in/samuel-wheeling-01121513a/">Sam Wheeling</a>

//       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
//         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

//           {mappedList}
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-link my-2 my-sm-0" type="submit">Search</button>
//         </form>
//       </div>
//     </Navbar>
//   );
// }

export default NavBar;
