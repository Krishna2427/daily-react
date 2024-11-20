const UserGreeting = ()=><p>User Greetings</p>
const GuestGreeting =()=> <p>guest Greeting</p>
const Greeting=({isOnGreeing})=>{
    // if(isOnGreeing){
    //     return <UserGreetingserGreeting/>
    // }
    // return <GuestGreeting/>
    return(
        <div>
            {isOnGreeing ? <UserGreeting/> : <GuestGreeting/>}
        </div>
    )
}
export default Greeting;