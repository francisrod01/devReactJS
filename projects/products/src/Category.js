import React, {Component} from 'react'
import axios from 'axios'

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            category: {}
        }

        this.loadData = this.loadData.bind(this)
    }
    loadData(catId) {
        const prodUrl = `http://localhost:3001/products?category=${catId}`
        const catUrl = `http://localhost:3001/categories/${catId}`
        axios
            .get(prodUrl)
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
        
        axios
            .get(catUrl)
            .then(res => {
                this.setState({
                    category: res.data
                })
            })
    }
    componentDidMount() {
        const catId = this.props.match.params.catId
        this.loadData(catId)
    }
    componentWillReceiveProps(newProps) {
        const catId = newProps.match.params.catId
        this.loadData(catId)
    }
    renderProduct(product, _key) {
        return (
            <p className='well' key={_key}>{product.product}</p>
        )
    }
    render() {
        return (
            <div>
                <h1>Category: "{this.state.category.category}"</h1>
                { this.state.products.map(this.renderProduct) }
            </div>
        )
    }
}

export default Category
