import { useContext } from "react"

const UserProfile=()=>{
    const user = useContext(useContext);
    return(
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Age:{user.age}</p>
        </div>
    )
}
export default UserProfile;