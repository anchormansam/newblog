import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import InfoCards from "./Components/InfoCard/InfoCards";
import InfoAccordion from "./Components/Accordion/Accordion";
import HomeView from "./Components/HomeView/HomeView";
import MediaQuery from "react-responsive";
// import BlogPost from "./Components/BlogPost/Blog"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <HomeView />
        <MediaQuery minDeviceWidth="900px">
          {matches => (matches ? <InfoCards /> : <InfoAccordion />)}
        </MediaQuery> */}
      </React.Fragment>
    );
  }
}

export default App;
