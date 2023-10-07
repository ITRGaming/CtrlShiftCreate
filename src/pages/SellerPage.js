import React from 'react';
// import './SellerPage.css'
import { Table, Button, Form } from 'react-bootstrap';

class SellerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            newProduct: {
                sellerName: '',
                image: '',
                name: '',
                certificate: '',
                ingredients: '',
                description: '',
                phoneNumber: '',
                email: '',
            },
        };
    }

    handleInputChange = (event) => {
        this.setState({
            newProduct: {
                ...this.state.newProduct,
                [event.target.name]: event.target.value,
            },
        });
    };

    handleFileChange = (event) => {
        this.setState({
            newProduct: {
                ...this.state.newProduct,
                [event.target.name]: URL.createObjectURL(event.target.files[0]),
            },
        });
    };

    handleAddProduct = () => {
        const { image, name, certificate, ingredients } = this.state.newProduct;
        if (this.validateImage(image) && this.validateImage(ingredients) && this.validateURL(certificate)) {
            this.setState({
                products: [...this.state.products, this.state.newProduct],
                newProduct: { sellerName: '', image: '', name: '', certificate: '', ingredients: '', description: '', phoneNumber: '', email: '' },
            });
        } else {
            alert('Invalid input. Please ensure the image and ingredients are .png or .jpg files and the certificate is a URL ending with "gov.in".');
        }
    };

    handleDeleteProduct = (index) => {
        const products = [...this.state.products];
        products.splice(index, 1);
        this.setState({ products });
    };

    validateImage = (image) => {
        return image.endsWith('.png') || image.endsWith('.jpg');
    };

    validateURL = (url) => {
        try {
            new URL(url);
            return url.endsWith('gov.in');
        } catch (_) {
            return false;
        }
    };

    render() {
        return (
            <div className="container py-3" id="sellerId">
                <div className="seller-heading text-center">
                    <h1>Welcome to the Community</h1>
                    <h2>Seller's Page</h2>
                </div>
                <Form>
                    <Form.Group controlId="formSellerName">
                        <Form.Label>Seller's Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter seller's name" name="sellerName" value={this.state.newProduct.sellerName} onChange={this.handleInputChange} required />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formProductImage">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" accept=".png,.jpg" name="image" onChange={this.handleFileChange} required />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name" name="name" value={this.state.newProduct.name} onChange={this.handleInputChange} required />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formProductCertificate">
                        <Form.Label>Product Certificate</Form.Label>
                        <Form.Control type="text" placeholder="Enter product certificate URL" name="certificate" value={this.state.newProduct.certificate} onChange={this.handleInputChange} required />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formProductIngredients">
                        <Form.Label>Product Ingredients</Form.Label>
                        <Form.Control type="file" accept=".png,.jpg" name="ingredients" onChange={this.handleFileChange} required />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formProductDescription">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter product description" name="description" value={this.state.newProduct.description} onChange={this.handleInputChange} required />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formPhoneNumber">
                        <Form.Label>Seller's Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter phone number" name="phoneNumber" value={this.state.newProduct.phoneNumber} onChange={this.handleInputChange} required />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formEmail">
                        <Form.Label>Seller's Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.newProduct.email} onChange={this.handleInputChange} required />
                    </Form.Group>
                    <br />

                    <Button variant="primary" onClick={this.handleAddProduct}>
                        Add Product
                    </Button>
                </Form>
                <br />

                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Seller Name</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Certificate</th>
                                <th>Ingredients</th>
                                <th>Description</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.sellerName}</td>
                                    <td><img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
                                    <td>{product.name}</td>
                                    <td><a href={product.certificate}>View Certificate</a></td>
                                    <td><img src={product.ingredients} alt="Ingredients" style={{ width: '50px', height: '50px' }} /></td>
                                    <td>{product.description}</td>
                                    <td>{product.phoneNumber}</td>
                                    <td>{product.email}</td>
                                    <td><Button variant="danger" onClick={() => this.handleDeleteProduct(index)}>Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default SellerPage;
