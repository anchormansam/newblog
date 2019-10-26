import React from 'react';
import DataCard from './InfoCards'
import Jumbotron from './Jumbotron';
import NavBar from './NavBar';

class App extends React.Component{
    render() {
        return(
            <React.Fragment>
                <NavBar />
                <Jumbotron /> 
            </React.Fragment>
        );
        
    }
}

export default App;