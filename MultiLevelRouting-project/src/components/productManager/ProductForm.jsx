import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import productServices from '../../services/productServices';
import { useEffect, useState } from 'react';

const ProductForm = () => {
    const { productId } = useParams();
    const isEdit = !!productId;
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({ name: "", price: "", qty: '' });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // Loading state

    // Yup validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Name is too short!")
            .required("Name is required"),
        price: Yup.number() 
            .typeError("Price must be a number") 
            .required("Price is required")
            .positive("Price must be a positive number") 
            .integer("Price must be an integer"), 
        qty: Yup.number()
            .typeError("Quantity must be a number") 
            .required("Quantity is required")
            .positive("Quantity must be a positive number") 
            .integer("Quantity must be an integer"), 
    });

    // Fetch product details if editing
    useEffect(() => {
        if (isEdit) {
            setLoading(true); // Start loading
            productServices.getProduct(productId) // Ensure this is correct
                .then((response) => {
                    const product = response.data;
                    setInitialValues({ name: product.name, price: product.price, qty: product.qty });
                    console.log("Fetched Product data:", product); // Debugging line
                })
                .catch((error) => console.log("Error fetching product data:", error))
                .finally(() => setLoading(false)); // End loading
        }
    }, [productId, isEdit]);

    // Form submission handler
    const handleSubmit = (values) => {
        console.log("Submitting with productId:", productId, "isEdit:", isEdit);
        if (isEdit) {
            productServices.updateProduct(productId, values) // Ensure this is correct
                .then(() => {
                    setMessage("Product updated successfully!");
                    console.log("Product updated successfully!"); // Debugging line
                })
                .catch((error) => console.log("Error updating product:", error));
        } else {
            productServices.createProduct(values)
                .then(() => {
                    setMessage("New product created successfully!");
                    console.log("New product created successfully!"); // Debugging line
                })
                .catch((error) => console.log("Error creating product:", error));
        }
    };

    return (
        <div className="container mt-5">
            <h2>{isEdit ? "Edit Product" : "Add Product"}</h2>
            {message && (
                <div className="alert alert-success">
                    {message}
                </div>
            )}
            {loading ? ( // Display loading state
                <div>Loading...</div>
            ) : (
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Product Name
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Product Name"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Price
                                </label>
                                <Field
                                    type="number"
                                    id="price" // Ensure this is correct
                                    name="price"
                                    className="form-control"
                                    placeholder="Enter Price"
                                />
                                <ErrorMessage
                                    name="price" // Corrected from email to price
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="qty" className="form-label">
                                    Quantity
                                </label>
                                <Field
                                    type="number"
                                    id="qty"
                                    name="qty"
                                    className="form-control"
                                    placeholder="Enter Quantity"
                                />
                                <ErrorMessage
                                    name="qty"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary me-2">
                                {isEdit ? "Update" : "Create"}
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate("/products")}
                            >
                                Back to Products list
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default ProductForm;
