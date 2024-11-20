import React, {createContext, useState } from 'react'

const  CrudContext = createContext();
const CrudProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const createItem = (item)=>{
        setItems([...items,{id:items.length + 1, ...item}]);
    };

    const readItem=()=>{
        return items;
    };

    const updateItem =(id, updateItem)=>{
       setItems(items.map(item => (item.id === id ? updateItem:item)));
    };

    const deleteItem = (id)=>{
          setItems(items.filter(item => item.id !== id));
    };
  return (
   <CrudContext.Provider value={{createItem, readItem, updateItem, deleteItem, items }}>
        {children}
   </CrudContext.Provider>
  )
}

export {CrudContext, CrudProvider}
