function Profile(props){
    return(
        <div>
            <h1>Profile Component</h1>
            <p>{props.users.name}</p>
            <p>{props.users.age}</p>
        </div>
    )
}
export default Profile;