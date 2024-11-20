
import { Component } from "react";

class Posts extends Component{
    constructor(){
        super();
        this.state={
             posts:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .than(res => res.json())
        .then(data => this.setState({post:[...data]}));
    }
    render(){
        return(
            <div>
                <h1>Posts Components</h1>
                <p>Posts:{this.state.posts.length}</p>
            </div>
        )
    }
}
export default Posts;