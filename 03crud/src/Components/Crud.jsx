import { Component } from "react";

class Crud extends Component{
      constructor(){
        super()
        this.state={
            posts:[]
        }
      }
      componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(data=> this.setState({posts:[...data]}))
      }
      render(){
        return(
             <div>
                <h1>Post Components</h1>
                <p>posts:{this.state.posts.length}</p>
                <div className="row ">
                    {this.state.posts.map((card)=>(
                        <div className="col-3" key={card.id}>
                            <div className="card cardwidth18">
                               <div className="card-body">
                               <h5 className="card-title">{card.title}</h5>
                               <p className="card-text">{card.body}</p>
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        )
      }
}
export default Crud;