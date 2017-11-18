import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import ProductsHome from './ProductsHome'
import Category from './Category'
import ProductsNew from './ProductsNew'
import ProductsEdit from './ProductsEdit'

class Products extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editingCategory: ''
        }

        this.renderCategory = this.renderCategory.bind(this)
        this.handleNewCategory = this.handleNewCategory.bind(this)
        this.handleEditCategory = this.handleEditCategory.bind(this)
        this.editCategory = this.editCategory.bind(this)
        this.cancelEditing = this.cancelEditing.bind(this)
    }
    componentDidMount() {
        this.props.loadCategories()
    }
    editCategory(category) {
        this.setState({
            editingCategory: category.id
        })
    }
    cancelEditing() {
        this.setState({
            editingCategory: ''
        })
    }
    renderCategory(cat) {
        return (
            <li key={cat.id}>
                { this.state.editingCategory === cat.id &&
                    <div className='input-group'>
                        <div className='input-group-btn'>
                            <input
                                ref={'cat-' + cat.id}
                                onKeyUp={this.handleEditCategory}
                                className='form-control' 
                                type='text'
                                defaultValue={cat.category} />
                            <button 
                                className='btn' 
                                onClick={this.cancelEditing}>cancel</button>
                        </div>
                    </div>
                }
                { this.state.editingCategory !== cat.id &&
                    <div>
                        <Link to={`/products/category/${cat.id}`}>{cat.category}</Link>
                        <button
                            className='btn btn-sm'
                            onClick={() => this.props.removeCategory(cat)}>
                            <span className='glyphicon glyphicon-remove'></span>
                        </button>
                        <button
                            onClick={() => this.editCategory(cat)}
                            className='btn btn-sm'>
                            <span className='glyphicon glyphicon-pencil'></span>
                        </button>
                    </div>
                }
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
    handleEditCategory(key) {
        if (key.keyCode === 13) {
            const id = this.state.editingCategory
            this.props.editCategory({
                id: id,
                category: this.refs['cat-' + id].value
            })
            this.setState({
                editingCategory: ''
            })
        }
    }
    render() {
        const {match, categories} = this.props
        return (
            <div className='row'>
                <div className='col-md-2'>
                    <h3>Categories</h3>
                    <ul style={{listStyle: 'none', padding: 0}}>
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
                    <Link to='/products/new'>New Product</Link>
                </div>
                <div className='col-md-10'>
                    <h1>Products</h1>
                    <Route exact path={match.url} component={ProductsHome} />
                    <Route exact path={match.url + '/new'}
                        render={(props) => {
                            return <ProductsNew
                                {...props}
                                categories={categories}
                                createProduct={this.props.createProduct}
                                />
                        }
                    } />
                    <Route path={match.url + '/edit/:id'}
                        render={(props) => {
                            return <ProductsEdit {...props}
                                categories={categories}
                                readProduct={this.props.readProduct}
                                editProduct={this.props.editProduct}
                                />
                        }}
                    /> 
                    <Route exact path={match.url + '/category/:id'} 
                        render={(props) => {
                            return <Category {...props}
                                loadProducts={this.props.loadProducts}
                                readCategory={this.props.readCategory}
                                products={this.props.products}
                                category={this.props.category}
                                removeProduct={this.props.removeProduct}
                                />
                        }
                    } />
                </div>
            </div>
        )
    }
}

export default Products
