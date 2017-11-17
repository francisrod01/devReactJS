import React, {Component} from 'react'

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            category: {},
            id: null
        }

        this.loadData = this.loadData.bind(this)
        this.renderProduct = this.renderProduct.bind(this)
    }
    loadData(id) {
        this.setState({ id })
        this.props.loadProducts(id)
        this.props.readCategory(id)
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.loadData(id)
    }
    componentWillReceiveProps(newProps) {
        const id = newProps.match.params.id
        if (id !== this.state.id) {
            this.loadData(id)
        }
    }
    renderProduct(product, _key) {
        return (
            <p className='well' key={_key}>
                {product.product}
                <button onClick={() => {
                    this.props.removeProduct(product)
                        .then((res) => this.loadData(this.props.match.params.id))
                }}>Remove</button>
            </p>
        )
    }
    render() {
        return (
            <div>
                <h1>Category: "{this.props.category.category}"</h1>
                { this.props.products.map(this.renderProduct) }
            </div>
        )
    }
}

export default Category
