import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import Info from './Info'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)


function *hello() {
  console.log('Hello from saga!')
}
sagaMiddleware.run(hello)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
        </div>
      </Provider>
    )
  }
}

export default App
