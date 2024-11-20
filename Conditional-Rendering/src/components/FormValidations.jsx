import React, { useState } from 'react'

function FormValidations() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username =='' && password ==''){
            setErrors('all fields are required')
            username({
                username:'',
                password:''
            })
        }else{
            setErrors('');
        }
    }
    return (
        <div>
            <h1> FormValidations</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text"
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='username'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='submit'>login</button>
                    </div>
                </form>
                {error && <p style={{color:'red'}}>{error}</p>}
            </div>
        </div>

    )
}

export default FormValidations