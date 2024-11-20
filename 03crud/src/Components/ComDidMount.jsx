
import { Component } from "react";

class ComponentDidMount extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:null
        };
    }
    componentDidMount(){
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => this.setState({data}));
    }
    render(){
        return(
            <div>
                {this.state.date ? (
                    <p>{this.stata.data.title}</p>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}
export default ComponentDidMount;