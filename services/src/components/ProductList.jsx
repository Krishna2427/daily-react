import { useEffect, useState } from "react"
import productService from "../services/productService";
import { Link } from "react-router-dom";

const ProductList = ()=>{
    const [ products, setProduct] = useState([]);

    useEffect(()=>{
        productService.getAllProducts()
        .then(res => setProduct(res.data))
        .catch(err=> console.log(err));
    },[])
    return(
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                           <Link to={`/products/${product.id}`}>{product.name}-${product.price}</Link>
                    </li>
                ))}
            </ul>
           <Link to="/products/new" className="btn btn-primary">Add new Products</Link>
        </div>
    )
}
export default ProductList;