import React from 'react';
import DataCard from './InfoCards'
import Jumbotron from './Jumbotron';
import NavBar from './NavBar';
import VerticalAccordion from './Accordion/VerticalAccordion';

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