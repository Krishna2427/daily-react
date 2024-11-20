import React, { useContext, useState } from 'react'
import { CrudContext } from '../context/CrudContext'

const Item = ({item}) => {
        const{updateItem, deleteItem} = useContext(CrudContext);
        const [isEditing, setEditing] = useState(false);
        const [name, setName] = useState(item.name);

        const handleUpdate=()=>{
            updateItem(Item.id, {...item, name});
            setEditing(false);
        };


  return (
    <div>
        {isEditing ? (
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        ):(
            <span>{item.name}</span>
        )}
        {isEditing ? (
            <button onClick={handleUpdate}>Save</button>
        ):(
            <button onClick={()=> deleteItem(item.id)}>Delete</button>
        )}
    </div>
  )
}

export default Item