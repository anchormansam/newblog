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
import BlogMenu from "../Navbar/BlogMenu"

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
          <Navbar id="navbarColor" light expand="md" class="navbar">
            <NavbarBrand href="/home" to="/home" id="menuTitle">
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
                <BlogMenu />

              </Route>
            </React.Fragment>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBar;
