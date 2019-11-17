import React from 'react';
import DataCard from './Components/InfoCards'
import Jumbotron from './Components/Jumbotron';
import NavBar from './Components/NavBar';
import VerticalAccordion from './Components/Accordion/VerticalAccordion';

class App extends React.Component{
    render() {
        return(
            <React.Fragment>
                <NavBar />
                <Jumbotron /> 
                <VerticalAccordion />
            </React.Fragment>
        );
        
    }
}

export default App;