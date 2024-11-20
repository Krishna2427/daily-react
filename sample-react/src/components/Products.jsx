import { Component } from "react";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    clickHandle() {
        this.setState({ products: [...this.props.products] });
    }

    render() {
        const { products } = this.state;
        return (
            <div>
                <h1>Class Components</h1>
                <p>value of Count: {products.length}</p>
                <button className="bg-blue-500 px-2 py-1 rounded" 
                    onClick={() => this.clickHandle()}>
                    Click me
                </button>
                
                {products.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.productID}>
                                    <td>{product.productID}</td>
                                    <td>{product.pName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.qty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No Data</p>
                )}
            </div>
        );
    }
}

export default Products;
