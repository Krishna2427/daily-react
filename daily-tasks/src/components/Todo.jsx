import { Component } from "react";

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            todolist:this.props.t,
        }
    }
    render(){
        return(
            <div>
                 <li>{this.props.t}
                     <button className="ms-32" onClick={this.props.onDelete}>delete</button>
                 </li>
            </div>
        )
    }
}
export default Todo;