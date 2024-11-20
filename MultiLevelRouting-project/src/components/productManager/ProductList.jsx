import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/productServices';
import productServices from '../../services/productServices';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // Fetch all users
    const retrieveProducts = () => {
        UserService.getAllProduct()
            .then((res) => {
                setProducts(res.data);
                console.log("Users fetched:", res.data);
            })
            .catch((err) => console.log("Error fetching users:", err));
    };
    const handleDelete = (productId) => {
        productServices.removeProduct(productId)
            .then(() => {
                console.log('User deleted successfully');
                setProducts(products.filter((product) => product.id !== productId));
            })
            .catch(err => console.log("Error deleting user:", err));
    }
    useEffect(() => {
        retrieveProducts();
    }, []);

    // const generateSerialNumber=(index)=>{
    //       return index + 1
    // }
    return (
        <div className='container mt-5'>
            <h2 className='mb-4'>Products list</h2>
            <ul className='list-group'>
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <li key={product.id} className='list-group-item'>
                            <div className="row">
                                <div className="col">
                                    <span>{index + 1}.{product.name.toUpperCase()}</span>
                                </div>
                                <div className="col">
                                    <span>&#8377;{product.price}</span>
                                </div>
                                <div className="col">
                                    <span>{product.qty} qty</span>
                                </div>
                                <div className='col-1'>
                                    <Link to={`/products/edit/${product.id}`} className='btn btn-warning btn-sm text-end'>Edit</Link>
                                </div>
                                <div className="col-2">
                                    <Link to={`/products/${product.id}`} className='btn btn-primary btn-sm'>
                                        view Details
                                    </Link>
                                </div>
                                <div className="col-2">
                                    {/* <Link to={`/users/${id}`} className='btn btn-danger btn-sm'>
                                         Delete User
                                    </Link> */}
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className='btn btn-danger'
                                    >
                                        delete User
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </ul>
            <Link to='/products/new' className="btn btn-primary mt-3">Add New User</Link>
        </div>
    );
};

export default ProductList;
