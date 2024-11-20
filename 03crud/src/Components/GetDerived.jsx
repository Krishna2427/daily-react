import { Component } from "react";

class GetDerived extends Component{
    constructor(){
        super();
        this.state = {
            count:0,
            name:''
        };
    }
    static getDerivedStateFromProps(nextProps, prevState){
         if(nextProps.name !== prevState.name){
            return{
                name:nextProps.name
            };
         }
         return null;
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}