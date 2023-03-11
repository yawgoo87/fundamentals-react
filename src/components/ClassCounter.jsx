import React from "react";

class ClassCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        };
        this.increse = this.increse.bind(this);
        this.decrese = this.decrese.bind(this);
    }
    increse(){
        this.setState({counter: this.state.counter + 1});
    } 
    decrese(){
        this.setState({counter: this.state.counter - 1});
    }
    render(){
        return(
            <div>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.increse}>Increase</button>
                <button onClick={this.decrese}>Decrease</button>
            </div>
        );
    }
}

export default ClassCounter