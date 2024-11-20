import { Component } from "react";

class ShouldComponentUpdate extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }
    shouldComponentUpdate(nextProps, nextState){
          if(this.state.count === nextState.count){
             return false;
          }
          return true;
    }
    render(){
        return (
            <div>
                <p>Count:{this.state.count}</p>
            </div>
        )
    }
}
export default ShouldComponentUpdate;