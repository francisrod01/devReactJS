import React, {Component} from 'react'


class ProductsNew extends Component {
    constructor(props) {
        super(props)

        this.handleNewProduct = this.handleNewProduct.bind(this)
    }
    handleNewProduct() {
        const product = {
            product: this.refs.product.value,
            category: this.refs.category.value
        }
        this.props.createProduct(product)
    }
    render() {
        const {categories} = this.props
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
