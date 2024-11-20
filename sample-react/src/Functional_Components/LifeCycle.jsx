import { Component } from "react";

class LifeCycle extends Component{
    constructor(props){
        super();
        this.state = {
           count:props.val
        }
    }
    // static getDerivedStateFromProps(props,stae){
    //     return {count:props.val}
    // }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({count:30});
    //     },3000)
    // }
    // shouldComponentUpdate(){
    //     return true
    // }
    

    getSnapshotBeforeUpdate(prevProps, prevState){
         document.getElementById('div1').innerHTML="Before the update, the count was" + prevState.count;
         return this.state;
    }
    componentDidUpdate(){
        document.getElementById('div2').innerHTML ='The Updated count is' + this.state.count;
    }
    componentWillUnmount(){
        console.log('The component named LifeCycle is about to be unmounted.')
    }
    render(){
        return(
            <div className="text-center">
                <p>Count:{this.state.count}</p>
                <div id='div1'></div>
                <div id='div2'></div>
            </div>
        )
    }
}
export default LifeCycle;