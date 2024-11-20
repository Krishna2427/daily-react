import { Component } from "react";
import LifeCycle from "./Functional_Components/LifeCycle";
import UserCrud from "./ClassComponents/UserCrud";

class App extends Component {
    constructor() {
        super();
        this.state = {
            // a: 10,
            // show: true,
        };
        
    }

    // countInc = () => {
    //     this.setState({ a: this.state.a + 1 });
    // }
    // deleteCount = () => {
    //     this.setState({ show: !this.state.show });
    // }

    render() {
        // let myContent;
        // if (this.state.show) {
        //     myContent = <LifeCycle val={this.state.a} />;
        // }
        return (
            <div className="text-center mt-4">
                {/* <h1>Class Component Life Cycle methods</h1>
                <button onClick={this.countInc} className="bg-blue-600 text-white py-1 px-2 rounded">INC</button>
                {myContent}
                <button type="button" onClick={this.deleteCount}>Delete Content</button>*/}
                <UserCrud/> 
            </div>
        );
    }
}

export default App;
