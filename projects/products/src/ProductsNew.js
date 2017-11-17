import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'


class ProductsNew extends Component {
    constructor(props) {
        super(props)

        this.handleNewProduct = this.handleNewProduct.bind(this)

        this.state = {
            redirect: false
        }
    }
    handleNewProduct() {
        const product = {
            product: this.refs.product.value,
            category: this.refs.category.value
        }
        this.props.createProduct(product)
            .then((res) => this.setState({
                redirect: `/products/category/${product.category}`
            }))
    }
    render() {
        const {categories} = this.props
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div>
                <h2>New Product</h2>
                <select ref='category'>
                    {
                        categories.map((c) => <option key={c.id} value={c.id}>{c.category}</option>)
                    }
                </select>
                <input 
                    ref='product'
                    className='form-control' 
                    placeholder='Name of new product' />
                <button onClick={this.handleNewProduct}>Save</button>
            </div>
        )
    }
}

export default ProductsNew
