import React, { useState } from "react";
function BasicForm (){
   const [email, setEamil] = useState('');
   const [passowd, setPassword] = useState('');
   const [errors, setErrors] = useState({});

   const validateForm = ()=>{
    const newErrors = {};
    if(!email){
        newErrors.email ='Email is required';
    }else if(!/\S+@\S+\.\S+/.test(email)){
        newErrors.email = 'Email is Invalid';
    }
    if(!passowd){
        newErrors.passowd ='Password is required';
    }else if(passowd.length < 6){
         newErrors.passowd = 'password must be at least 6 charecters'
    }
     
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e)=>{
        e.preventDefault();
        if(validateForm()){
            console.log('Form submitted:', {email, passowd});
            
        }
};
   return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" 
                   value={email}
                   onChange={(e)=>setEamil(e.target.value)}
                   className="border-gray-200"
                />
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" 
                value={passowd}
                onChange={(e)=>setPassword(e.target.value)}
                className="border-gray-400 rounded-md"
                />
                {errors.passowd && <p style={{color:'red'}}>{errors.passowd}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
   )
}
export default BasicForm;