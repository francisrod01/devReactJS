import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from './reducer'
import Counter from './Counter'
import DisplayCounter from './DisplayCounter'

let store = createStore(counterReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <DisplayCounter />
        </div>
      </Provider>
    );
  }
}

export default App
