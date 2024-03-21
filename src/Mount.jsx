import { Component } from "react";

class Mount extends Component{
    constructor() {
        super();
        this.state = {
            count: 0,
            data:{}
        }
    }

    componentDidMount() {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            this.setState({data: data});
        });
        console.log(document.getElementById("abc"));
    }

    shouldComponentUpdate() {
        console.log("should componenent update");
        return true;
    }

    componentDidUpdate() {
        console.log("did update");
    }

    render() {
        console.log(this.state.data);
        return(
            <main>
                <h1 id="abc">{this.state.count}</h1>
                {this.state.data.products?.map((item,index) =>(
                    <div key={index}>{item.title}
                    <img src={item.thumbnail} alt="" /></div>
                ))}
                <button onClick={() => this.setState({count: this.state.count+1})}>click</button>
            </main>
        );
    }
}
export default Mount;