import React from 'react'

function Messages({hasMessages}) {
  return (
    <div>
        {hasMessages && <h2>You have new Messages</h2>}
    </div>
  )
}
export default Messages;