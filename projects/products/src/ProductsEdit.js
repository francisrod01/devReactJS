import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'


class ProductsEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }

        this.handleEditProduct = this.handleEditProduct.bind(this)
    }
    componentWillMount() {
        const id = this.props.match.params.id
        this.props.readProduct(id)
            .then((res) => {
                this.refs.product.value = res.data.product
                this.refs.category.value = res.data.category
            })
    }
    handleEditProduct() {
        const product = {
            id: this.props.match.params.id,
            product: this.refs.product.value,
            category: this.refs.category.value
        }
        this.props.editProduct(product)
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
                <h2>Edit Product</h2>
                <select ref='category'>
                    {
                        categories.map((c) => <option key={c.id} value={c.id}>{c.category}</option>)
                    }
                </select>
                <input 
                    ref='product'
                    className='form-control' 
                    placeholder='Name of product' />
                <button onClick={this.handleEditProduct}>Save</button>
            </div>
        )
    }
}

export default ProductsEdit
