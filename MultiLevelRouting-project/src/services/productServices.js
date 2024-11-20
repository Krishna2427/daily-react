import http from '../common/http';

const getAllProduct = () => {
    return http.get('/products');
};

const getProduct = (id) => {
    return http.get(`/products/${id}`);
};

const createProduct = (data) => {
    return http.post('/products', data);
};

const updateProduct = (id, data) => {
    return http.put(`/products/${id}`, data);
};

const removeProduct = (id) => {
    return http.delete(`/products/${id}`);
};

const removeAllProduct = () => {
    return http.delete('/products');
};

const productServices = {
    getAllProduct,
    getProduct,
    createProduct,
    updateProduct,
    removeProduct,
    removeAllProduct,
};

export default productServices;
