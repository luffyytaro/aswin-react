import { Component } from "react";

class New extends Component{
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    add=() => {
        let title = document.getElementById("title").value;
        let des = document.getElementById("des").value;
        this.setState({list: [...this.state.list,{title ,des}]});
    }

    del =(i)=>  {
        this.setState({list: [...this.state.list.filter((a,b) => i!==b)]})
    }
    

    edit= (i) => {
        let newTitle = prompt("enter new title:");
        let newDes = prompt("enter new des")
        this.setState({list: [...this.state.list.map((item, index) => i===index? {title: newTitle , des: newDes}:item)]})
    }

    render() {
        return(
            <main>
                <input type="text" id="title" placeholder="enter the title"/>
                <input type="text" id="des" placeholder="enter description"/>
                <button onClick={this.add}>add</button>
                <ol>{this.state.list.map((item, index) => (
                    <li key={index}>
                        {item.title} ---
                        {item.des}
                     <button onClick={()=> this.edit(index)}>edit</button>
                     <button onClick={()=> this.del(index)}>delete</button>
                    </li>

                    ))}</ol>
            </main>
        );
    }

}
export default New;