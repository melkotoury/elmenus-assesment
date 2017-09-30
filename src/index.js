import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore , applyMiddleware} from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import allReducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css'
import './stylesheets/index.css'
import App from './components/App'

import registerServiceWorker from './registerServiceWorker'


/**
 *  Here we will apply middleware and use redux devtools extension
 * */
const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
      		<div>
		        <Route exact path='/' component={App} />

      		</div>
  </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
