import React from 'react'

function StatusMessage({status}) {
    switch(status){
        case 'success':
            return <h1>Operation was successfully completed</h1>
           
        case 'error':
            return <h1>There was an error</h1>
        
        case 'loading':
            return <h1>Loading...</h1>
        default:
            return null;
    }
}

export default StatusMessage