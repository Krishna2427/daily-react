import { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            lists:["gym","exercise","running"]
        }
    }
    handleDelete = (index)=>{
               const updateList = this.state.lists.filter((item,i)=> i !== index);
               this.setState({lists:updateList})
    }
    render(){
        return(
            <div>
                {this.state.lists.map((t, index)=>(
                   <Todo key={index} t={t} onDelete={() => this.handleDelete(index)}/>
                ))}
            </div>
        )
    }
}
export default TodoList;