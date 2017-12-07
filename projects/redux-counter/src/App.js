import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from './reducer'
import Counter from './Counter'

let store = createStore(counterReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App
