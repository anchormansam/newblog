import React from 'react';


class Jumbotron extends React.Component {
buttonClick(){
    console.log('clicked');
}

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">This is where I could add a fancy quote... but i didnt!</p>
                <hr className="my-4" />
                    <p>This is where i would give credit to the quote</p>
                    <p className="lead">
                        <button className="btn btn-primary btn-lg" href="Contact" onClick={this.buttonClick}>Contact Me</button>
                    </p>
            </div>
                )
            }
        }
        
        
        
        
export default Jumbotron;