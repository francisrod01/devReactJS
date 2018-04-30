# React - Context API #

Working with props using Context from React.

- Author: [Francis Rodrigues][1]

## Concepts ##

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like this between components without having to explicitly pass a prop through every level of the tree.

**Passing props as `Prop Drilling`:**

```jsx
import React, { Component } from 'react'

const Title = props => (
  // props.auth.user return a 'john.doe'
  <h1 className="App-title">Welcome {props.auth.user}</h1>
)

const Header = props => (
  <header className="App-header">
    <Title auth={props.auth} /> {/* This work is very hard to mainteinance */}
  </header>
)

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: {
        user: 'john.doe',
        isAuth: false
      }
    }
  }
  render() {
    // The `this.state.auth` pass 'john.doe' by `auth` prop.
    return (
      <div className="App">
        <Header auth={this.state.auth} />
      </div>
    )
  }
}
```

## References ##

- [ReactJS][2]
- [Context - React Advanced Guide][3]

## License ##

MIT

  [1]: https://github.com/francisrod01
  [2]: https://reactjs.org/
  [3]: https://reactjs.org/docs/context.html
