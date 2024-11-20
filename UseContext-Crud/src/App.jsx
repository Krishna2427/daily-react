import React from 'react'
import { CrudContext, CrudProvider } from './context/CrudContext'
import AddItems from './components/AddItems'
import ItemList from './components/ItemList'

const App = () => {
  return (
   <CrudProvider>
         <h1>CRUD with  useContext</h1>
         <AddItems/>
         <ItemList/>

   </CrudProvider>
  );
}

export default App