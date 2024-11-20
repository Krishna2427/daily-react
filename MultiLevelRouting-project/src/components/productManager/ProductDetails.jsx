import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom'; 
import UserService from '../../services/productServices';
import productServices from '../../services/productServices';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    // Fetch user details based on userId

    const retrieveProductDetails = (productId) => {
        productServices.getProduct(productId)
            .then((res) => {
                setProduct(res.data);
                console.log("User details fetched:", res.data); // Debugging line
            })
            .catch((err) => console.log("Error fetching user details:", err));
    };

    // useEffect to call retrieveUserDetails when userId changes

    useEffect(() => {
        if (productId) retrieveProductDetails(productId);
    }, [productId]);

    return (
        <div>
            <h2>User Details</h2>
            {product ? (
                <>
                    <p>Name: {product.name}</p>
                    <p>Email: {product.price}</p>
                    <p>Email: {product.qty}</p>
                    <nav>
                        <Link to="settings" className="btn btn-secondary me-2">Settings</Link>
                        <Link to="/products" className="btn btn-secondary">Back to Products</Link>
                    </nav>
                </>
            ) : (
                <p>Loading Product details...</p>
            )}
            <Outlet />
        </div>
    );
};

export default ProductDetails;
