import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./HomeView.scss";

class TitlePage extends React.Component {
  render() {
    return (
      <div className="hero-image">
        <div className="hero-text">
          <h1>Samuel Wheeling</h1>
          <p>Welcome to my Blog</p>
          <button>Enter Site</button>
        </div>
      </div>
    );
  }
}

export default TitlePage;
