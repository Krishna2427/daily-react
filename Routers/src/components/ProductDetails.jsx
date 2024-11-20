import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {productDetails} = useParams();
  return (
    <div>
        <h1>ProductDetails</h1>
        <p>These are the some product details</p>
    </div>
  )
}

export default ProductDetails