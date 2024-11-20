import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productService from '../services/productService';

const ProductDetails = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        productService.getProductById(productId)
        .then(res=> setProduct(res.data))
        .then(err=> console.log(err));
    },[productId])
  return (
    <div>
        <h2>Product Detaile</h2>
        <p>Name: {product.name}</p>
        <p>Price:${product.price}</p>
        <Link to="/products">Back to Product List</Link>
    </div>
  )
}

export default ProductDetails