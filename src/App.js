import React from "react";
import Jumbotron from "./Components/Jumbotron";
import NavBar from "./Components/NavBar";
import InfoCards from "./Components/InfoCards";
import InfoAccordion from "./Components/Accordion/Accordion";
import MediaQuery from "react-responsive";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron /> 
        <MediaQuery minDeviceWidth="900px">
          {matches => (matches ? <InfoCards /> : <InfoAccordion />)}
        </MediaQuery>
      </React.Fragment>
    );
  }
}

export default App;
