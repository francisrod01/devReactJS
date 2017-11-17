import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import ProductsHome from './ProductsHome'
import Category from './Category'

class Products extends Component {
    constructor(props) {
        super(props)
        
        this.renderCategory = this.renderCategory.bind(this)
        this.handleNewCategory = this.handleNewCategory.bind(this)
    }
    componentDidMount() {
        this.props.loadCategories()
    }
    renderCategory(cat) {
        return (
            <li key={cat.id}>
                <Link to={`/products/category/${cat.id}`}>{cat.category}</Link>
                <button className='btn btn-sm' onClick={() => this.props.removeCategory(cat)}>
                    <span className='glyphicon glyphicon-remove'></span>
                </button>
            </li>
        )
    }
    handleNewCategory(key) {
        if (key.keyCode === 13) {
            this.props.createCategory({
                category: this.refs.category.value
            })
            this.refs.category.value = ''
        }
    }
    render() {
        const {match, categories} = this.props
        return (
            <div className='row'>
                <div className='col-md-2'>
                    <h3>Categories</h3>
                    <ul>
                        { categories.map(this.renderCategory) }
                    </ul>
                    <div className='well well-sm'>
                        <input
                            onKeyUp={this.handleNewCategory}
                            type='text'
                            className='form-control'
                            ref='category'
                            placeholder='New category' />
                    </div>
                </div>
                <div className='col-md-10'>
                    <h1>Products</h1>
                    <Route exact path={match.url} component={ProductsHome} />
                    <Route exact path={match.url + '/category/:catId'} component={Category} />
                </div>
            </div>
        )
    }
}

export default Products
