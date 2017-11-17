import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import About from './About'

class App extends Component {
  constructor(props) {
    super(props)

    this.loadCategories = this.loadCategories.bind(this)
    this.createCategory = this.createCategory.bind(this)
    this.removeCategory = this.removeCategory.bind(this)

    this.state = {
      categories: []
    }
  }
  loadCategories() {
    this.props.api.loadCategories()
      .then(res => {
          this.setState({
            categories: res.data
          })
      })
  }
  createCategory(category) {
    this.props.api.createCategory(category)
      .then((res) => this.loadCategories())
  }
  removeCategory(category) {
    this.props.api.deleteCategory(category.id)
      .then((res) => this.loadCategories())
  }
  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-inverse'>
            <div className='container'>
              <Link to='/' className='navbar-brand'>
                Products Management
              </Link>
              <ul className='nav navbar-nav'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/products'>Products</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='container' style={{'paddingTop': 20}}>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/products' render={(props) => {
              return (<Products 
                {...props}
                loadCategories={this.loadCategories}
                createCategory={this.createCategory}
                categories={this.state.categories}
                removeCategory={this.removeCategory}
                />)
            }} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
