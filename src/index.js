import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from './AppContainer'
import store from './store/setupStore'

const app = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
