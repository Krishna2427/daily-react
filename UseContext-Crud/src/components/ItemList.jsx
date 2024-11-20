import React, { useContext } from 'react'
import { CrudContext } from '../context/CrudContext'
import Item from './Item';

const ItemList = () => {
    const {items} = useContext(CrudContext);

  return (
    <div>
        {items.map(items =>(
           <Item key={items.id} item={items}/>
        ))}
    </div>
  )
}

export default ItemList