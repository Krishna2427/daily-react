import { useState } from "react"

function LoginForm(){
       const [formData, setFordData] = useState({
        email:'',
        password:'',
       });
       const handleChange=(e)=>{
        const {name, value} = e.target;
        setFordData({
            ...formData,
            [name]:value,
        });
       };
       const hadleSubmit = (event)=>{
        event.preventDefault();
        console.log('Form Data:', formData);

        setFordData({
            email: '',
            password: '',
        });
        
       }
    return(
        <div>
            <form onSubmit={hadleSubmit} className="mt-11 text-center">
                <input type="email" 
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       placeholder="Enter email"
                       className="border border-gray-400 rounded-md"
                />
                <input type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="enter valid password"
                    className="border border-gray-400 rounded-md ms-3"
                />
                <button type="submit" className="bg-blue-200 ms-2 px-2 py-0 rounded-sm">Login</button>
             </form>
             
        </div>
    )
}
export default LoginForm;