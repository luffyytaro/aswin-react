import { Component } from "react";

class App extends Component{
    constructor() {
        super();
        this.counter = 0;
        this.state = {
            counter: 0
        };
    }


    
    abcd =() =>{
        // console.log(this.counter);
        this.setState({counter: this.state.counter+1})
        this.counter++};


    render() {
        return(
            <main>
                {/* <Heading counter={this.counter}/> */}
                <h2>{this.state.counter}</h2>
                <button onClick={this.abcd}>inc</button>
            </main>
        );
    }
}
export default App;

class Heading extends Component {
    constructor() {
        super();
    }

    // render() {
    //     return(
    //         <h1>{this.props.counter}</h1>
    //     );
    // }
} 