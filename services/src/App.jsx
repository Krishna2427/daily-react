import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import ProductForm from './components/ProductForm'

const App = () => {
  return (
    <Router>
        <Routes>
             <Route path='/' element={<Navigate to={'/products'}/>}/>
             <Route path='/products' element={<ProductList/>}/>
             <Route path='/products/new' element = {<ProductForm/>}/>
             <Route path='/products/:productId' element={<ProductDetails/>}/>
             <Route path='/products/edit/:productId' element={<ProductForm/>}/>
        </Routes>
    </Router>
  )
}

export default App